import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  sentiment?: 'positive' | 'neutral' | 'frustrated';
}

export interface AIState {
  chatHistory: ChatMessage[];
  isTyping: boolean;
  isStreaming: boolean;
  context: string[];
  sentimentScore: number; // -1 to 1
  frustrationDetected: boolean;
  error: string | null;
}

const initialState: AIState = {
  chatHistory: [],
  isTyping: false,
  isStreaming: false,
  context: [],
  sentimentScore: 0,
  frustrationDetected: false,
  error: null,
};

const aiSlice = createSlice({
  name: 'ai',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<ChatMessage>) => {
      state.chatHistory.push(action.payload);
    },
    setTyping: (state, action: PayloadAction<boolean>) => {
      state.isTyping = action.payload;
    },
    setStreaming: (state, action: PayloadAction<boolean>) => {
      state.isStreaming = action.payload;
    },
    updateContext: (state, action: PayloadAction<string[]>) => {
      state.context = action.payload;
    },
    setSentiment: (
      state,
      action: PayloadAction<{
        score: number;
        sentiment: 'positive' | 'neutral' | 'frustrated';
      }>
    ) => {
      state.sentimentScore = action.payload.score;
      state.frustrationDetected = action.payload.sentiment === 'frustrated';
    },
    clearChat: (state) => {
      state.chatHistory = [];
      state.context = [];
      state.sentimentScore = 0;
      state.frustrationDetected = false;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {
  addMessage,
  setTyping,
  setStreaming,
  updateContext,
  setSentiment,
  clearChat,
  setError,
} = aiSlice.actions;

export default aiSlice.reducer;
