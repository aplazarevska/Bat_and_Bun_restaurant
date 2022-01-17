import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Alert,
  TextField,
  Button
} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import { useAuth } from '../contexts/AuthContext';
import HeroBanner from '../components/HomeView/HeroBanner';

const LoginView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const heroImageUrl = "./img/about-hero-image.jpg";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);

      await login(email, password);

      navigate("/dashboard");
    } catch (err) {
      setError("Log in failed. Please check your email and password.");
      console.log(err);
    }

    setLoading(false);
  };

  return (
    <div id="LoginView">
      <HeroBanner imgUrl={heroImageUrl} />
      <Container>
        <Typography variant="h1" sx={{ fontSize: '3em' }}>Log In</Typography>
        
        {/* Show error */}
        {error && <Alert severity="error">{error}</Alert>}

        <div className="login-form">
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField
              variant="standard"
              label="Email address"
              name="email"
              fullWidth
              margin="normal"
              required
              onChange={e => setEmail(e.target.value)}
            />
            <TextField
              variant="standard"
              label="Password"
              name="password"
              type="password"
              fullWidth
              margin="normal"
              required
              onChange={e => setPassword(e.target.value)}
            />
            
            <Button
              type="submit"
              color="primary"
              variant="contained"
              margin="normal"
              endIcon={<KeyboardArrowRightIcon />}
              disabled={loading}
            >
              Log In
            </Button>
          </form>
        </div>
      </Container>
    </div>
  )
}

export default LoginView;
