import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  Typography,
  Button
} from '@mui/material';
import { useAuth } from '../../contexts/AuthContext';
import ListTable from './ListTable';
import {
  ITEMS_SUCCESS,
  ITEMS_FAIL
} from '../../reducers/constants';
import { ItemContext } from '../../contexts/ItemContext';

const AdminMenuList = () => {
  const { currentUser } = useAuth();
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
    <div id="DashboardView">
      <Container>
        <Typography variant="h1">
          Menu Item List
        </Typography>
        <div style={{textAlign: 'center', marginTop: '2em'}}>
          <Button
            color="primary"
            variant="contained"
            component={Link}
            to="/dashboard/menu/new"
          >
            Add New Item
          </Button>
        </div>
        <div>
          {categories.map((category, i) => (
            <div key={i}>
              <Typography
                variant="h2"
              >
                {category}
              </Typography>
              <ListTable items={itemsCategory(category)} token={currentUser.accessToken} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default AdminMenuList;
