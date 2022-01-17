import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Typography,
  Grid
} from '@mui/material';
import {
  ITEMS_SUCCESS,
  ITEMS_FAIL
} from '../../reducers/constants';
import { ItemContext } from '../../contexts/ItemContext';
import MenuItemDetail from './MenuItemDetail';

const MenuItemList = () => {
  const { allItems, dispatch } = useContext(ItemContext);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      // Get all items from db
      try {
        const { data } = await axios.get("/items");
        dispatch({ type: ITEMS_SUCCESS, payload: data });
      } catch (err) {
        dispatch({ type: ITEMS_FAIL, payload: err.message });
      }
    })();
    
    // Get all available categories
    if (allItems.length > 0) {
      let cats = [];
      allItems.map(item => !cats.includes(item.category) && cats.push(item.category));
      
      setCategories(cats);
    }
  }, [allItems, dispatch]);

  // Get items within the category
  const itemsCategory = (cat) => {
    return allItems.filter(item => item.category === cat);
  };
  
  return (
    <Container id="menu-item-list">
      {categories.map((category, i) => (
        <div key={i} className="menu-box">
          <Typography variant="h3">{category}</Typography>
          <Grid container spacing={2}>
            {itemsCategory(category).map((item, i) => (
              <Grid item xs={6} md={4} lg={3} key={i}>
                <MenuItemDetail item={item} />
              </Grid>
            ))}
          </Grid>
        </div>
      ))}
    </Container>
  )
}

export default MenuItemList;
