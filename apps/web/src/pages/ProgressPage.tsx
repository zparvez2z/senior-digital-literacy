import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import { useAppSelector } from '../store/store';

export const ProgressPage: React.FC = () => {
  const { totalProgress, completedLessons, timeSpent } = useAppSelector(
    (state) => state.learning
  );

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h1" component="h1" gutterBottom>
          Your Progress
        </Typography>

        <Paper sx={{ p: 4, mt: 3 }}>
          <Typography variant="h2" gutterBottom>
            Overall Progress: {totalProgress}%
          </Typography>
          
          <Typography variant="body1" sx={{ mt: 2 }}>
            Completed Lessons: {completedLessons.length}
          </Typography>
          
          <Typography variant="body1" sx={{ mt: 1 }}>
            Time Spent Learning: {timeSpent} minutes
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};
