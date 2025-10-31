import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { useAppSelector } from '../store/store';

export const DashboardPage: React.FC = () => {
  const { user } = useAppSelector((state) => state.auth);
  const { totalProgress, completedLessons } = useAppSelector(
    (state) => state.learning
  );

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h1" component="h1" gutterBottom>
          Welcome back, {user?.name}!
        </Typography>

        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h2" gutterBottom>
                Your Progress
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.25rem' }}>
                {totalProgress}% Complete
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h2" gutterBottom>
                Lessons Completed
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.25rem' }}>
                {completedLessons.length} lessons
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h2" gutterBottom>
                Continue Learning
              </Typography>
              <Typography variant="body1">
                Your personalized learning path is ready!
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
