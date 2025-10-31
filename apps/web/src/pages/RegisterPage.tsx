import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Paper,
  Link,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual registration logic
    console.log('Register:', formData);
    navigate('/login');
  };

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Paper sx={{ p: 4 }}>
          <Typography variant="h1" component="h1" gutterBottom>
            Create Account
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <TextField
              fullWidth
              label="Full Name"
              value={formData.name}
              onChange={handleChange('name')}
              required
              margin="normal"
              InputLabelProps={{ sx: { fontSize: '1.125rem' } }}
              InputProps={{ sx: { fontSize: '1.125rem' } }}
            />

            <TextField
              fullWidth
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={handleChange('email')}
              required
              margin="normal"
              InputLabelProps={{ sx: { fontSize: '1.125rem' } }}
              InputProps={{ sx: { fontSize: '1.125rem' } }}
            />

            <TextField
              fullWidth
              label="Password"
              type="password"
              value={formData.password}
              onChange={handleChange('password')}
              required
              margin="normal"
              InputLabelProps={{ sx: { fontSize: '1.125rem' } }}
              InputProps={{ sx: { fontSize: '1.125rem' } }}
            />

            <TextField
              fullWidth
              label="Confirm Password"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange('confirmPassword')}
              required
              margin="normal"
              InputLabelProps={{ sx: { fontSize: '1.125rem' } }}
              InputProps={{ sx: { fontSize: '1.125rem' } }}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              sx={{ mt: 3, mb: 2, minHeight: '56px' }}
            >
              Create Account
            </Button>

            <Box sx={{ textAlign: 'center', mt: 2 }}>
              <Link
                component="button"
                type="button"
                onClick={() => navigate('/login')}
                sx={{ fontSize: '1.125rem' }}
              >
                Already have an account? Sign in
              </Link>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};
