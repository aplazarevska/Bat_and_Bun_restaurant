import React, { useState } from 'react';
import {
  Container,
  Typography
} from '@mui/material';
import TrackingForm from '../components/TrackOrderView/TrackingForm';
import TrackResult from '../components/TrackOrderView/TrackResult';

const TrackOrderView = () => {
  const [trackResult, setTrackResult] = useState(null);

  return (
    <div id="TrackOrderView">
      <Container>
        <Typography variant="h1" sx={{ fontSize: '3em', textAlign: 'center' }}>Track Order</Typography>
        <Typography variant="body1" sx={{ margin: '1em auto', textAlign: 'center' }}>
          Enter your <strong>order reference</strong> and <strong>phone number</strong> that you use to place the order to check your order status.
        </Typography>

        <TrackingForm setTrackResult={setTrackResult} />
      </Container>

      {trackResult &&
        <TrackResult trackResult={trackResult} />
      }
    </div>
  )
}

export default TrackOrderView;
