import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0052A3 0%, #003d7a 100%)',
        display: 'flex',
        alignItems: 'center',
        py: 8,
      }}
    >
      <Container maxWidth="md" component="main" id="main-content">
        <Box
          sx={{
            textAlign: 'center',
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(10px)',
            borderRadius: '24px',
            padding: { xs: 4, md: 6 },
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.3)',
          }}
        >
          <Typography 
            variant="h1" 
            component="h1" 
            gutterBottom
            sx={{
              fontWeight: 800,
              letterSpacing: '-0.8px',
              mb: 2,
            }}
          >
            Welcome to Senior Digital Literacy
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              mb: 5, 
              fontSize: '1.25rem',
              color: '#64748b',
              fontWeight: 500,
            }}
          >
            Learn technology at your own pace with personalized AI assistance
          </Typography>

          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }} role="navigation" aria-label="Get started options">
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/register')}
              sx={{ 
                minHeight: '60px', 
                px: 5,
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
              Get Started
            </Button>
            
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate('/login')}
              sx={{ 
                minHeight: '60px', 
                px: 5,
                borderWidth: '2px',
                borderColor: '#0052A3',
                color: '#0052A3',
                borderRadius: '16px',
                fontWeight: 700,
                fontSize: '1.125rem',
                letterSpacing: '-0.2px',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease',
                '&:hover': {
                  borderWidth: '2px',
                  background: 'rgba(0, 82, 163, 0.05)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 24px rgba(0, 82, 163, 0.2)',
                },
              }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
