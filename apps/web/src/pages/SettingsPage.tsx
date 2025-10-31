import React from 'react';
import {
  Box,
  Typography,
  Container,
  Paper,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../store/store';
import { setTheme, setFontSize } from '../store/slices/uiSlice';

export const SettingsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { theme, fontSize } = useAppSelector((state) => state.ui);

  return (
    <Container maxWidth="md">
      <Box sx={{ py: 4 }}>
        <Typography variant="h1" component="h1" gutterBottom>
          Settings
        </Typography>

        <Paper sx={{ p: 4, mt: 3 }}>
          <FormControl component="fieldset" sx={{ mb: 4 }}>
            <FormLabel component="legend" sx={{ fontSize: '1.25rem', mb: 2 }}>
              Theme
            </FormLabel>
            <RadioGroup
              value={theme}
              onChange={(e) =>
                dispatch(setTheme(e.target.value as 'normal' | 'high-contrast'))
              }
            >
              <FormControlLabel
                value="normal"
                control={<Radio sx={{ transform: 'scale(1.5)', mr: 2 }} />}
                label={<span style={{ fontSize: '1.125rem' }}>Normal</span>}
              />
              <FormControlLabel
                value="high-contrast"
                control={<Radio sx={{ transform: 'scale(1.5)', mr: 2 }} />}
                label={<span style={{ fontSize: '1.125rem' }}>High Contrast</span>}
              />
            </RadioGroup>
          </FormControl>

          <FormControl component="fieldset">
            <FormLabel component="legend" sx={{ fontSize: '1.25rem', mb: 2 }}>
              Font Size
            </FormLabel>
            <RadioGroup
              value={fontSize}
              onChange={(e) =>
                dispatch(
                  setFontSize(
                    e.target.value as 'normal' | 'large' | 'extra-large'
                  )
                )
              }
            >
              <FormControlLabel
                value="normal"
                control={<Radio sx={{ transform: 'scale(1.5)', mr: 2 }} />}
                label={<span style={{ fontSize: '1.125rem' }}>Normal</span>}
              />
              <FormControlLabel
                value="large"
                control={<Radio sx={{ transform: 'scale(1.5)', mr: 2 }} />}
                label={<span style={{ fontSize: '1.25rem' }}>Large</span>}
              />
              <FormControlLabel
                value="extra-large"
                control={<Radio sx={{ transform: 'scale(1.5)', mr: 2 }} />}
                label={<span style={{ fontSize: '1.5rem' }}>Extra Large</span>}
              />
            </RadioGroup>
          </FormControl>
        </Paper>
      </Box>
    </Container>
  );
};
