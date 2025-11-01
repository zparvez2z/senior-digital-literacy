import React from 'react';
import { Card, CardContent, Typography, Box, LinearProgress, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface Module {
  id: number;
  title: string;
  description: string;
  difficulty: string;
  estimatedTime: string;
  progress: number;
  icon: string;
  lessons: number;
  color: string;
}

interface ModuleCardProps {
  module: Module;
}

export const ModuleCard: React.FC<ModuleCardProps> = ({ module }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to module detail page (we'll create this later)
    navigate(`/modules/${module.id}`);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <Card
      onClick={handleClick}
      onKeyPress={handleKeyPress}
      tabIndex={0}
      role="button"
      aria-label={`${module.title} module, ${module.difficulty} difficulty, ${module.progress}% complete`}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        border: '2px solid',
        borderColor: 'divider',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
          borderColor: 'primary.main',
        },
        '&:focus': {
          outline: '3px solid',
          outlineColor: 'primary.main',
          outlineOffset: '2px',
        },
        '&:active': {
          transform: 'translateY(-2px)',
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        {/* Icon and Title */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Typography
            component="span"
            sx={{
              fontSize: '3rem',
              lineHeight: 1,
              mr: 2,
            }}
            role="img"
            aria-label={`${module.title} icon`}
          >
            {module.icon}
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: 'text.primary',
              lineHeight: 1.3,
            }}
          >
            {module.title}
          </Typography>
        </Box>

        {/* Description */}
        <Typography
          variant="body1"
          sx={{
            fontSize: '1rem',
            color: 'text.secondary',
            mb: 2,
            lineHeight: 1.6,
          }}
        >
          {module.description}
        </Typography>

        {/* Metadata */}
        <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
          <Chip
            label={module.difficulty}
            size="medium"
            sx={{
              fontSize: '0.875rem',
              fontWeight: 600,
              height: '32px',
              bgcolor: module.difficulty === 'Beginner' ? 'success.light' : 'warning.light',
              color: module.difficulty === 'Beginner' ? 'success.dark' : 'warning.dark',
            }}
          />
          <Chip
            label={`${module.lessons} lessons`}
            size="medium"
            sx={{
              fontSize: '0.875rem',
              fontWeight: 600,
              height: '32px',
            }}
          />
          <Chip
            label={module.estimatedTime}
            size="medium"
            sx={{
              fontSize: '0.875rem',
              fontWeight: 600,
              height: '32px',
            }}
          />
        </Box>

        {/* Progress */}
        <Box sx={{ mt: 'auto' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: '0.875rem',
                fontWeight: 600,
                color: 'text.secondary',
              }}
            >
              Progress
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: '0.875rem',
                fontWeight: 700,
                color: module.progress > 0 ? 'primary.main' : 'text.secondary',
              }}
            >
              {module.progress}%
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={module.progress}
            sx={{
              height: 8,
              borderRadius: 4,
              bgcolor: 'grey.200',
              '& .MuiLinearProgress-bar': {
                borderRadius: 4,
                bgcolor: module.progress > 0 ? module.color : 'grey.400',
              },
            }}
            aria-label={`Module progress: ${module.progress}%`}
          />
        </Box>

        {/* Status Badge */}
        {module.progress === 0 && (
          <Box sx={{ mt: 2 }}>
            <Chip
              label="Not Started"
              size="small"
              sx={{
                fontSize: '0.75rem',
                fontWeight: 600,
                bgcolor: 'grey.100',
                color: 'text.secondary',
              }}
            />
          </Box>
        )}
        {module.progress > 0 && module.progress < 100 && (
          <Box sx={{ mt: 2 }}>
            <Chip
              label="In Progress"
              size="small"
              sx={{
                fontSize: '0.75rem',
                fontWeight: 600,
                bgcolor: 'info.light',
                color: 'info.dark',
              }}
            />
          </Box>
        )}
        {module.progress === 100 && (
          <Box sx={{ mt: 2 }}>
            <Chip
              label="✓ Completed"
              size="small"
              sx={{
                fontSize: '0.75rem',
                fontWeight: 600,
                bgcolor: 'success.light',
                color: 'success.dark',
              }}
            />
          </Box>
        )}
      </CardContent>
    </Card>
  );
};
