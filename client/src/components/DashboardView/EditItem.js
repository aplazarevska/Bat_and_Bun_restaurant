import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  Typography,
  Alert
} from "@mui/material";
import { useAuth } from '../../contexts/AuthContext';
import ItemForm from './ItemForm';

const EditItem = () => {
  const { currentUser } = useAuth();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [item, setItem] = useState(null);

  useEffect(() => {
    setLoading(true);
    // Get the selected item to edit
    try {
      axios.get(`/items/${id}`)
      .then(res => {
        setItem(res.data);
        setLoading(false);
      });
    } catch (err) {
      return (`Error retrieving the menu item. Error: ${err}.`);
    }
  }, [id]);

  return (
    <div id="DashboardView">
      <Container>
        <Typography variant="h1" sx={{ fontSize: "3em", margin: "1em auto" }}>
          Edit Item
        </Typography>
        
        {/* Show error */}
        {error && <Alert severity="error">{error}</Alert>}
        
        {/* Call item form and populate input field with selected item records */}
        {!loading && item && 
          <ItemForm setError={setError} token={currentUser.accessToken} item={item} />
        }

        {loading &&
          <Typography variant="h3" sx={{ fontSize: "1.75em", margin: "1em auto" }}>
            Loading...
          </Typography>
        }
      </Container>
    </div>
  )
}

export default EditItem;
