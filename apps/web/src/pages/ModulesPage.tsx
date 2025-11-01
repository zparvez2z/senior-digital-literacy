import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { ModuleCard } from '../components/ModuleCard';
import { modulesData } from '../data/modulesData';

export const ModulesPage: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Box sx={{ mb: 4 }}>
          <Typography 
            variant="h1" 
            component="h1" 
            gutterBottom
            sx={{ 
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 800,
              color: 'text.primary',
            }}
          >
            Learning Modules
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              fontSize: '1.125rem',
              color: 'text.secondary',
              maxWidth: '800px',
            }}
          >
            Choose a topic to begin your learning journey. Each module is designed specifically 
            for seniors with step-by-step lessons and helpful AI assistance.
          </Typography>
        </Box>

        {/* Modules Grid */}
        <Grid container spacing={3}>
          {modulesData.map((module) => (
            <Grid item xs={12} sm={6} md={4} key={module.id}>
              <ModuleCard module={module} />
            </Grid>
          ))}
        </Grid>

        {/* Help Section */}
        <Box 
          sx={{ 
            mt: 6, 
            p: 3, 
            bgcolor: 'primary.light',
            borderRadius: 3,
            border: '2px solid',
            borderColor: 'primary.main',
          }}
        >
          <Typography 
            variant="h2" 
            gutterBottom
            sx={{ fontSize: '1.5rem', fontWeight: 700 }}
          >
            Need Help Choosing?
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.125rem' }}>
            Our AI assistant can recommend the best module for you based on your goals. 
            Click the chat icon in the bottom corner to get personalized guidance.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};
