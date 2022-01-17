import React, { useState } from 'react';
import axios from 'axios';
import {
  Alert,
  TextField,
  Button
} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const TrackingForm = ({ setTrackResult }) => {
  const [orderReference, setOrderReference] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setOrderReference('');
    setPhone('');

    try {
      setError('');
      setLoading(true);

      // Send order reference instead of order id, and phone number (stripped) as query
      axios.get(`/orders/${orderReference}?phone=${phone.trim().split('').filter(n => !n.match(/[^0-9]/g)).join('')}`, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((result) => setTrackResult(result.data[0]))
      .catch((error) => {
        console.error(error);
      });
    } catch (err) {
      setError("Error tracking the order.");
      console.log(err);
    }

    setLoading(false);
  };

  return (
    <>
      {/* Show error */}
      {error && <Alert severity="error">{error}</Alert>}

      <div className="tracking-form">
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            variant="standard"
            label="Order reference"
            name="orderReference"
            fullWidth
            margin="normal"
            value={orderReference}
            required
            onChange={e => setOrderReference(e.target.value)}
          />
          <TextField
            variant="standard"
            label="Phone number"
            name="phone"
            fullWidth
            margin="normal"
            value={phone}
            required
            onChange={e => setPhone(e.target.value)}
          />

          <Button
            type="submit"
            color="primary"
            variant="contained"
            margin="normal"
            endIcon={<KeyboardArrowRightIcon />}
            disabled={loading}
          >
            Submit
          </Button>
        </form>
      </div>
    </>
  )
}

export default TrackingForm;
