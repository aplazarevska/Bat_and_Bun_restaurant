import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  TextField,
  Button
} from "@mui/material";
import { createItem, updateItem } from '../../utils/itemUtils';

const ItemForm = ({ setError, token, item }) => {
  const [fileData, setFileData] = useState(null);
  const [category, setCategory] = useState(item.category);
  const [title, setTitle] = useState(item.name);
  const [description, setDescription] = useState(item.notes);
  const [price, setPrice] = useState(item.price);
  const [image, setImage] = useState(item.image);
  const [loading, setLoading] = useState(false);
  const [addItemForm, setAddItemForm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the form is called by AddNewItem or EditItem
    // If item name is blank (cannot be blank on item creation),
    // that means this will be AddNewItem
    // else, it is EditItem
    if (item.name === '') {
      setAddItemForm(true);
    } else {
      setAddItemForm(false);
    }
  }, [item]);

  // Handler for image upload
  const fileChangeHandler = (e) => {
    setFileData(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);

      // If user doesn't upload image then use placeholder (or existing image)
      if (fileData === null) {
        // If this is new item
        if(addItemForm) {
          const newItem = {
            name: title,
            notes: description,
            image: "/img/items/image-placeholder.jpg",
            category: category,
            price: price,
            deleted: false
          };
  
          createItem(newItem, token);
        } else {
          // If this is edit item
          const updatedItem = {
            ...item,
            name: title,
            notes: description,
            image: image,
            category: category,
            price: price
          }
          
          updateItem(updatedItem, token);
        }

        setLoading(false);
    
        navigate("/dashboard/menu");
      } else {
        // If user uploads image, use fileData
        const data = new FormData();
        data.append("image", fileData); // image key to use in Postman

        const server = "/upload/setItemImage";

        axios.post(`${server}`, data)
          .then((result) => {
            setImage(result.data);

            if(addItemForm) {
              const newItem = {
                name: title,
                notes: description,
                image: result.data || "/img/items/image-placeholder.jpg",
                category: category,
                price: price,
                deleted: false
              };
      
              createItem(newItem, token);
            } else {
              const updatedItem = {
                ...item,
                name: title,
                notes: description,
                image: (image !== result.data ? result.data : image) || "/img/items/image-placeholder.jpg",
                category: category,
                price: price
              }
              
              updateItem(updatedItem, token);
            }
      
            setLoading(false);
      
            navigate("/dashboard/menu");
          })
          .catch((err) => {
            console.log("Something Went Wrong", err);
          });
      }
    } catch (err) {
      setError("Error creating new menu item.");
      console.log(err);
    }
  };
  
  return (
    <div className="item-form">
      {image &&
        (
          <p className="item-image-display">Item Image
          <img src={image} alt={`${title}-${image.substring(image.lastIndexOf("-") + 1, image.lastIndexOf("."))}`} />
          </p>
        )
      }

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          variant="standard"
          label="Category"
          name="category"
          fullWidth
          margin="normal"
          value={category}
          required
          onChange={e => setCategory(e.target.value)}
        />
        <TextField
          variant="standard"
          label="Title"
          name="title"
          fullWidth
          margin="normal"
          value={title}
          required
          onChange={e => setTitle(e.target.value)}
        />
        <TextField
          variant="standard"
          label="Description"
          name="description"
          fullWidth
          margin="normal"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <TextField
          variant="standard"
          label="Price"
          name="price"
          fullWidth
          margin="normal"
          value={price}
          required
          onChange={e => setPrice(e.target.value)}
        />

        <p>Upload Item Image</p>
        <input type="file" onChange={fileChangeHandler} />

        <div style={{textAlign: 'center', margin: '2em auto'}}>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            disabled={loading}
          >
            {addItemForm ? "Add New Item" : "Save Changes"}
          </Button>
        </div>
      </form>
    </div>
  )
}

// Need to set default empty object to indicate
// if the form is called by AddNewItem or EditItem
ItemForm.defaultProps = {
  setError: '',
  token: '',
  item: {
    name: '',
    notes: '',
    image: '',
    category: '',
    price: '',
    deleted: false
  }
};

export default ItemForm;
