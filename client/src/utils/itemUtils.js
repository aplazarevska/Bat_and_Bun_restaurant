import axios from 'axios';

const createItem = async (newItem, token) => {
  try {
    await axios.post('/items', newItem, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
  } catch (err) {
    return (`Error creating new menu item. Error: ${err}.`);
  }
};

const updateItem = async (item, token) => {
  try {
    await axios.put(`/items/${item._id}`, item, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
  } catch (err) {
    return (`Error deleting the item. Error: ${err}.`);
  }
};

export {
  createItem,
  updateItem
}
