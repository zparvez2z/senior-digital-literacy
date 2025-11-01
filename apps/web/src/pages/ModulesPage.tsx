import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { ModuleCard } from '../components/ModuleCard';

// Mock data for learning modules
const modules = [
  {
    id: 1,
    title: 'Email Basics',
    description: 'Learn to send, receive, and organize emails safely',
    difficulty: 'Beginner',
    estimatedTime: '2 hours',
    progress: 45,
    icon: '📧',
    lessons: 8,
    color: '#0052A3',
  },
  {
    id: 2,
    title: 'Video Calls',
    description: 'Connect with family and friends through video chat',
    difficulty: 'Beginner',
    estimatedTime: '1.5 hours',
    progress: 20,
    icon: '📹',
    lessons: 6,
    color: '#007A00',
  },
  {
    id: 3,
    title: 'Online Banking',
    description: 'Manage your finances securely from home',
    difficulty: 'Intermediate',
    estimatedTime: '3 hours',
    progress: 0,
    icon: '🏦',
    lessons: 10,
    color: '#5B21B6',
  },
  {
    id: 4,
    title: 'Social Media',
    description: 'Stay connected and share moments with loved ones',
    difficulty: 'Beginner',
    estimatedTime: '2.5 hours',
    progress: 60,
    icon: '🌐',
    lessons: 9,
    color: '#0891B2',
  },
  {
    id: 5,
    title: 'Online Shopping',
    description: 'Shop safely and conveniently from your device',
    difficulty: 'Intermediate',
    estimatedTime: '2 hours',
    progress: 10,
    icon: '🛒',
    lessons: 7,
    color: '#DC2626',
  },
  {
    id: 6,
    title: 'Health Services',
    description: 'Access telehealth and manage medical appointments',
    difficulty: 'Intermediate',
    estimatedTime: '2.5 hours',
    progress: 0,
    icon: '🏥',
    lessons: 8,
    color: '#EA580C',
  },
];

export const ModulesPage: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        {/* Page Header */}
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
          {modules.map((module) => (
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
