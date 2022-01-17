import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography
} from '@mui/material';
import CartTable from '../components/CartTable';
import CustomerDetailsForm from '../components/OrderConfirmationView/CustomerDetailsForm';
import { CartContext } from '../contexts/CartContext';

const OrderConfirmationView = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    cartItems.length < 1 && navigate('/cart');
  }, [cartItems, navigate]);

  return (
    <div id="OrderConfirmationView">
      <Container>
        <Typography variant="h1" sx={{ fontSize: '3em', textAlign: 'center' }}>Order Confirmation</Typography>
      </Container>

      <CartTable
        cartItems={cartItems}
      />

      <CustomerDetailsForm cartItems={cartItems} />
    </div>
  )
}

export default OrderConfirmationView;
