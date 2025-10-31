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
import { useAppDispatch } from '../store/store';
import { login } from '../store/slices/authSlice';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual login logic
    dispatch(
      login({
        user: {
          id: '1',
          email,
          name: 'Demo User',
          fullName: 'Demo User',
          skillLevel: 'beginner',
          accessibilitySettings: {
            fontSize: 'normal',
            highContrast: false,
            screenReader: false,
            reducedMotion: false,
          },
        },
        token: 'demo-token',
      })
    );
    navigate('/dashboard');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f0f4f8 0%, #e2e8f0 100%)',
        display: 'flex',
        alignItems: 'center',
        py: 8,
      }}
    >
      <Container maxWidth="sm">
        <Paper 
          sx={{ 
            p: { xs: 4, md: 5 },
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(10px)',
            borderRadius: '24px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.05)',
            border: '1px solid rgba(0, 0, 0, 0.06)',
          }}
        >
          <Typography 
            variant="h1" 
            component="h1" 
            gutterBottom
            sx={{
              fontWeight: 800,
              letterSpacing: '-0.8px',
              mb: 4,
            }}
          >
            Sign In
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <TextField
              fullWidth
              label="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              margin="normal"
              InputLabelProps={{ sx: { fontSize: '1.125rem', fontWeight: 500 } }}
              InputProps={{ 
                sx: { 
                  fontSize: '1.125rem',
                  borderRadius: '12px',
                  '& fieldset': {
                    borderColor: 'rgba(0, 0, 0, 0.12)',
                  },
                },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&:hover fieldset': {
                    borderColor: '#0052A3',
                  },
                  '&.Mui-focused fieldset': {
                    borderWidth: '2px',
                  },
                },
              }}
            />

            <TextField
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              margin="normal"
              InputLabelProps={{ sx: { fontSize: '1.125rem', fontWeight: 500 } }}
              InputProps={{ 
                sx: { 
                  fontSize: '1.125rem',
                  borderRadius: '12px',
                  '& fieldset': {
                    borderColor: 'rgba(0, 0, 0, 0.12)',
                  },
                },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&:hover fieldset': {
                    borderColor: '#0052A3',
                  },
                  '&.Mui-focused fieldset': {
                    borderWidth: '2px',
                  },
                },
              }}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              sx={{ 
                mt: 4, 
                mb: 2, 
                minHeight: '60px',
                background: 'linear-gradient(135deg, #0052A3 0%, #003d7a 100%)',
                boxShadow: '0 8px 24px rgba(0, 82, 163, 0.3)',
                borderRadius: '16px',
                fontWeight: 700,
                fontSize: '1.125rem',
                letterSpacing: '-0.2px',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                '&:hover': {
                  background: 'linear-gradient(135deg, #003d7a 0%, #002952 100%)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 12px 32px rgba(0, 82, 163, 0.4)',
                },
              }}
            >
              Sign In
            </Button>

            <Box sx={{ textAlign: 'center', mt: 3 }}>
              <Link
                component="button"
                type="button"
                onClick={() => navigate('/register')}
                sx={{ 
                  fontSize: '1.125rem',
                  fontWeight: 500,
                  color: '#64748b',
                  textDecorationColor: '#64748b',
                  transition: 'color 0.2s ease',
                  '&:hover': {
                    color: '#0052A3',
                    textDecorationColor: '#0052A3',
                  },
                }}
              >
                Don&apos;t have an account? Register here
              </Link>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};
