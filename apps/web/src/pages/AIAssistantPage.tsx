import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Paper,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { useAppSelector, useAppDispatch } from '../store/store';
import { addMessage, setTyping } from '../store/slices/aiSlice';

export const AIAssistantPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { chatHistory, isTyping } = useAppSelector((state) => state.ai);
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (!message.trim()) return;

    // Add user message
    dispatch(
      addMessage({
        id: Date.now().toString(),
        role: 'user',
        content: message,
        timestamp: new Date(),
      })
    );

    // Simulate AI response
    dispatch(setTyping(true));
    setTimeout(() => {
      dispatch(
        addMessage({
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: "I'm here to help! This is a demo response.",
          timestamp: new Date(),
          sentiment: 'positive',
        })
      );
      dispatch(setTyping(false));
    }, 1000);

    setMessage('');
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ py: 4 }}>
        <Typography variant="h1" component="h1" gutterBottom>
          AI Assistant
        </Typography>

        <Paper sx={{ p: 3, mt: 3, minHeight: '400px' }}>
          <List>
            {chatHistory.map((msg) => (
              <ListItem
                key={msg.id}
                sx={{
                  flexDirection: 'column',
                  alignItems: msg.role === 'user' ? 'flex-end' : 'flex-start',
                }}
              >
                <ListItemText
                  primary={msg.content}
                  sx={{
                    bgcolor: msg.role === 'user' ? 'primary.light' : 'grey.200',
                    p: 2,
                    borderRadius: 2,
                    fontSize: '1.125rem',
                  }}
                />
              </ListItem>
            ))}
            {isTyping && (
              <ListItem>
                <ListItemText primary="AI is typing..." />
              </ListItem>
            )}
          </List>
        </Paper>

        <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
          <TextField
            fullWidth
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your question..."
            InputProps={{ sx: { fontSize: '1.125rem' } }}
          />
          <Button
            variant="contained"
            onClick={handleSend}
            sx={{ minHeight: '56px', px: 4 }}
          >
            Send
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
