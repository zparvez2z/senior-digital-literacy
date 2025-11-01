import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Container,
  Button,
  Chip,
  Paper,
  LinearProgress,
  Alert,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { getModuleById } from '../data/modulesData';
import { LessonListItem } from '../components/LessonListItem';

export const ModuleDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const module = getModuleById(Number(id));

  if (!module) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Alert severity="error" sx={{ mb: 2 }}>
          Module not found. The requested module does not exist.
        </Alert>
        <Button
          variant="contained"
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/modules')}
          sx={{ minHeight: '56px', fontSize: '1.1rem' }}
        >
          Back to Modules
        </Button>
      </Container>
    );
  }

  const completedLessons = module.lessonsList.filter(lesson => lesson.completed).length;
  const totalLessons = module.lessonsList.length;
  const nextLesson = module.lessonsList.find(lesson => !lesson.completed && !lesson.locked);

  const handleStartContinue = () => {
    if (nextLesson) {
      navigate(`/modules/${module.id}/lessons/${nextLesson.id}`);
    }
  };

  const getDifficultyColor = () => {
    switch (module.difficulty) {
      case 'Beginner':
        return 'success';
      case 'Intermediate':
        return 'warning';
      case 'Advanced':
        return 'error';
      default:
        return 'default';
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Back Button */}
      <Button
        variant="text"
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate('/modules')}
        sx={{
          mb: 3,
          minHeight: '48px',
          fontSize: '1rem',
          '&:focus': {
            outline: '3px solid',
            outlineColor: 'primary.main',
            outlineOffset: '2px',
          },
        }}
        aria-label="Back to all modules"
      >
        Back to Modules
      </Button>

      {/* Module Header */}
      <Paper
        elevation={2}
        sx={{
          p: 4,
          mb: 4,
          borderLeft: `8px solid ${module.color}`,
        }}
      >
        <Box display="flex" alignItems="center" gap={2} mb={2}>
          <Typography
            variant="h1"
            component="span"
            sx={{ fontSize: '3rem' }}
            role="img"
            aria-label={`${module.title} icon`}
          >
            {module.icon}
          </Typography>
          <Box flex={1}>
            <Typography variant="h1" sx={{ fontSize: '2rem', fontWeight: 700, mb: 1 }}>
              {module.title}
            </Typography>
            <Box display="flex" gap={1} flexWrap="wrap">
              <Chip
                label={module.difficulty}
                color={getDifficultyColor()}
                sx={{ minHeight: '36px', fontSize: '0.95rem' }}
              />
              <Chip
                label={`${totalLessons} lessons`}
                sx={{ minHeight: '36px', fontSize: '0.95rem' }}
              />
              <Chip
                label={module.estimatedTime}
                sx={{ minHeight: '36px', fontSize: '0.95rem' }}
              />
            </Box>
          </Box>
        </Box>

        <Typography variant="body1" sx={{ fontSize: '1.1rem', mb: 3, color: 'text.secondary' }}>
          {module.detailedDescription}
        </Typography>

        {/* Progress Section */}
        <Box mb={3}>
          <Box display="flex" justifyContent="space-between" mb={1}>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              Your Progress
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              {completedLessons} of {totalLessons} lessons completed ({module.progress}%)
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={module.progress}
            sx={{
              height: 12,
              borderRadius: 6,
              bgcolor: 'grey.200',
            }}
            aria-label={`Module progress: ${module.progress}%`}
          />
        </Box>

        {/* Start/Continue Button */}
        {nextLesson && (
          <Button
            variant="contained"
            size="large"
            onClick={handleStartContinue}
            sx={{
              minHeight: '56px',
              fontSize: '1.1rem',
              fontWeight: 600,
              px: 4,
            }}
          >
            {module.progress === 0 ? 'Start Learning' : 'Continue Learning'}
          </Button>
        )}

        {module.progress === 100 && (
          <Alert severity="success" sx={{ mt: 2 }}>
            🎉 Congratulations! You've completed this module!
          </Alert>
        )}
      </Paper>

      {/* Learning Objectives */}
      <Paper elevation={1} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h2" sx={{ fontSize: '1.5rem', fontWeight: 600, mb: 2 }}>
          What You'll Learn
        </Typography>
        <Box component="ul" sx={{ pl: 3, m: 0 }}>
          {module.learningObjectives.map((objective, index) => (
            <Typography
              component="li"
              key={index}
              variant="body1"
              sx={{ mb: 1, fontSize: '1.05rem' }}
            >
              {objective}
            </Typography>
          ))}
        </Box>
      </Paper>

      {/* Lessons List */}
      <Box>
        <Typography variant="h2" sx={{ fontSize: '1.5rem', fontWeight: 600, mb: 3 }}>
          Lessons ({totalLessons})
        </Typography>
        {module.lessonsList.map((lesson, index) => (
          <LessonListItem
            key={lesson.id}
            lesson={lesson}
            moduleId={module.id}
            lessonNumber={index + 1}
          />
        ))}
      </Box>

      {/* Help Section */}
      <Paper
        elevation={1}
        sx={{
          p: 3,
          mt: 4,
          bgcolor: 'info.lighter',
          borderLeft: '4px solid',
          borderColor: 'info.main',
        }}
      >
        <Typography variant="h3" sx={{ fontSize: '1.25rem', fontWeight: 600, mb: 1 }}>
          Need Help?
        </Typography>
        <Typography variant="body1">
          Our AI assistant is here to help you through each lesson. Click the chat icon in the
          bottom right corner anytime you need guidance or have questions.
        </Typography>
      </Paper>
    </Container>
  );
};
