import React, { useState } from 'react';
import {
  Container,
  Typography,
  Alert
} from "@mui/material";
import { useAuth } from '../../contexts/AuthContext';
import ItemForm from './ItemForm';

const AddNewItem = () => {
  const { currentUser } = useAuth();
  const [error, setError] = useState('');

  return (
    <div id="DashboardView">
      <Container>
        <Typography variant="h1" sx={{ fontSize: "3em", margin: "1em auto" }}>
          New Menu Item
        </Typography>
        
        {/* Show error */}
        {error && <Alert severity="error">{error}</Alert>}
        
        <ItemForm setError={setError} token={currentUser.accessToken} />
      </Container>
    </div>
  )
}

export default AddNewItem;
