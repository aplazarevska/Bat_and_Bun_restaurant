import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Typography,
  Button
} from '@mui/material';

import {
  CART_ADD,
  CART_REMOVE
} from '../reducers/constants';
import { CartContext } from '../contexts/CartContext';
import CartTable from '../components/CartTable';

const CartView = () => {
  const { cartItems, dispatch } = useContext(CartContext);
  const emptyMessage = "Your cart is empty. Try adding some items.";
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(()=> {
    setIsEmpty(cartItems.length < 1);
  }, [cartItems]);

  const deleteFromCart = (item) => {
    dispatch({type: CART_REMOVE, payload: item});
  };

  const addQty = (item) => {
    dispatch({type: CART_ADD, payload: {...item, qty: 1}});
  };

  const minQty = (item) => {
    dispatch({type: CART_ADD, payload: {...item, qty: -1}});
  };

  return (
    <div id="CartView">
      <Container>
        <Typography variant="h1" sx={{ fontSize: '3em', textAlign: 'center' }}>Cart</Typography>
      </Container>

      <CartTable
        emptyMessage={emptyMessage}
        cartItems={cartItems}
        deleteFromCart={deleteFromCart}
        addQty={addQty}
        minQty={minQty}
      />

      <Container className="cart-buttons">
        <Button variant="outlined" component={Link} to="/">Continue Shopping</Button>
        <Button variant="contained" component={Link} to="/order-confirmation" disabled={isEmpty}>Place Order</Button>
      </Container>
    </div>
  )
}

export default CartView;
