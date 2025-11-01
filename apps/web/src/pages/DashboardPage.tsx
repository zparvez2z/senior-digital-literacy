import React from 'react';
import { Box, Typography, Container, Grid, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../store/store';

export const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
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
              <Typography variant="body1" sx={{ mb: 3 }}>
                Your personalized learning path is ready! Browse available modules and continue building your digital skills.
              </Typography>
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/modules')}
                sx={{
                  minHeight: '56px',
                  fontSize: '1.125rem',
                  fontWeight: 700,
                  px: 4,
                }}
              >
                Browse Learning Modules
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
