import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  LinearProgress,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LockIcon from '@mui/icons-material/Lock';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

interface LessonListItemProps {
  lesson: {
    id: number;
    title: string;
    description: string;
    duration: string;
    completed: boolean;
    locked: boolean;
  };
  moduleId: number;
  lessonNumber: number;
}

export const LessonListItem: React.FC<LessonListItemProps> = ({
  lesson,
  moduleId,
  lessonNumber,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!lesson.locked) {
      navigate(`/modules/${moduleId}/lessons/${lesson.id}`);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if ((event.key === 'Enter' || event.key === ' ') && !lesson.locked) {
      event.preventDefault();
      navigate(`/modules/${moduleId}/lessons/${lesson.id}`);
    }
  };

  const getStatusColor = () => {
    if (lesson.completed) return 'success';
    if (lesson.locked) return 'default';
    return 'primary';
  };

  const getStatusIcon = () => {
    if (lesson.completed) return <CheckCircleIcon sx={{ fontSize: '2rem' }} />;
    if (lesson.locked) return <LockIcon sx={{ fontSize: '2rem' }} />;
    return <PlayCircleOutlineIcon sx={{ fontSize: '2rem' }} />;
  };

  const getStatusText = () => {
    if (lesson.completed) return 'Completed';
    if (lesson.locked) return 'Locked';
    return 'Start';
  };

  return (
    <Card
      onClick={handleClick}
      onKeyPress={handleKeyPress}
      role="button"
      tabIndex={lesson.locked ? -1 : 0}
      aria-label={`Lesson ${lessonNumber}: ${lesson.title}, ${lesson.duration}, ${getStatusText()}`}
      aria-disabled={lesson.locked}
      sx={{
        cursor: lesson.locked ? 'not-allowed' : 'pointer',
        opacity: lesson.locked ? 0.6 : 1,
        transition: 'all 0.3s ease',
        '&:hover': lesson.locked
          ? {}
          : {
              transform: 'translateY(-4px)',
              boxShadow: 4,
            },
        '&:focus': {
          outline: '3px solid',
          outlineColor: 'primary.main',
          outlineOffset: '2px',
        },
        mb: 2,
      }}
    >
      <CardContent>
        <Box display="flex" alignItems="center" gap={2}>
          {/* Lesson Number */}
          <Box
            sx={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              bgcolor: lesson.completed ? 'success.main' : lesson.locked ? 'grey.300' : 'primary.main',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '1.25rem',
              flexShrink: 0,
            }}
            aria-hidden="true"
          >
            {lessonNumber}
          </Box>

          {/* Lesson Content */}
          <Box flex={1}>
            <Typography
              variant="h3"
              sx={{
                fontSize: '1.25rem',
                fontWeight: 600,
                mb: 0.5,
                color: lesson.locked ? 'text.disabled' : 'text.primary',
              }}
            >
              {lesson.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: lesson.locked ? 'text.disabled' : 'text.secondary',
                mb: 1,
              }}
            >
              {lesson.description}
            </Typography>
            <Box display="flex" gap={1} flexWrap="wrap">
              <Chip
                label={lesson.duration}
                size="small"
                sx={{ minHeight: '32px' }}
              />
              <Chip
                label={getStatusText()}
                color={getStatusColor()}
                size="small"
                sx={{ minHeight: '32px' }}
              />
            </Box>
          </Box>

          {/* Status Icon */}
          <Box
            sx={{
              color: lesson.completed
                ? 'success.main'
                : lesson.locked
                ? 'grey.400'
                : 'primary.main',
              flexShrink: 0,
            }}
            aria-hidden="true"
          >
            {getStatusIcon()}
          </Box>
        </Box>

        {/* Progress Bar for Completed Lessons */}
        {lesson.completed && (
          <Box mt={2}>
            <LinearProgress
              variant="determinate"
              value={100}
              sx={{
                height: 8,
                borderRadius: 4,
              }}
              aria-label="Lesson completed"
            />
          </Box>
        )}
      </CardContent>
    </Card>
  );
};
