import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  Typography
} from '@mui/material';
import CartTable from '../CartTable';

const OrderRecord = () => {
  const { state } = useLocation();  // contains all selected orders from AdminOrderList

  return (
    <div className="order-record">
      <Typography variant="h1" sx={{ fontSize: '3em', textAlign: 'center' }}>Order Record</Typography>

      {state.map(order => (
        <div key={order.id}>
          <Typography variant="h2">Order #{order.orderRef}</Typography>
          <Typography variant="h3" sx={{ color: (order.orderStatus === 'Processing...' ? '#3162ae' : order.orderStatus === 'Cancelled' ? '#fa8c8c': '#3c3c3c')}}>{order.orderStatus}</Typography>
          <div style={{ textAlign: 'center' }}>{order.customerName} | ({order.customerEmail}) | Ph: {order.customerPhone}</div>

          <CartTable cartItems={order.cartItems} />
        </div>
      ))
      }
    </div>
  )
}

export default OrderRecord;
