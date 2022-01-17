import React from 'react';
import {
  Typography
} from '@mui/material';
import CartTable from '../CartTable';

const TrackResult = ({ trackResult }) => {
  const { 
    orderRef,
    cartItems,
    orderStatus
   } = trackResult;

  if (orderStatus && orderStatus !== 'Cancelled') {
    return (
      <>
        <Typography variant="h2" sx={{ fontSize: '1.75em', textAlign: 'center' }}>Order #{orderRef}</Typography>
        <Typography variant="h3" sx={{ margin: '1em auto', fontSize: '1.25em', fontWeight: '700', textAlign: 'center', color: (orderStatus === 'Processing...' ? '#3162ae' : '#3c3c3c') }}>{orderStatus}</Typography>
  
        <CartTable cartItems={cartItems} />
      </>
    )
  } else {
    return (
      <>
        <Typography variant="body1" sx={{ margin: '1em auto', textAlign: 'center' }}>
          <span style={{ color: '#fa8c8c', fontWeight: '700' }}>No record</span> was found for
        </Typography>
        <Typography variant="h2" sx={{ fontSize: '1.75em', textAlign: 'center' }}>Order #{orderRef}</Typography>
        <Typography variant="body1" sx={{ textAlign: 'center' }}>
          Please contact us at <strong><a href="tel:+61452453686" target="_blank" rel="noopener noreferrer" style={{ color: '#3162ae' }}>0452 453 686</a></strong> for any enquiries.
        </Typography>
      </>
    )
  }
}

export default TrackResult
