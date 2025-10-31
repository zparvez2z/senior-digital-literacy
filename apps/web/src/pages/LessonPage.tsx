import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';

export const LessonPage: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Paper sx={{ p: 4 }}>
          <Typography variant="h1" component="h1" gutterBottom>
            Lesson Content
          </Typography>
          
          <Typography variant="body1">
            Lesson content will be displayed here.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};
