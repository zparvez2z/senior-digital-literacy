import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { configureStore } from '@reduxjs/toolkit';
import { seniorTheme } from '../theme/seniorTheme';
import authReducer from '../store/slices/authSlice';
import learningReducer from '../store/slices/learningSlice';
import aiReducer from '../store/slices/aiSlice';
import uiReducer from '../store/slices/uiSlice';

// Create a test store with initial state
export function createTestStore(preloadedState?: any) {
  return configureStore({
    reducer: {
      auth: authReducer,
      learning: learningReducer,
      ai: aiReducer,
      ui: uiReducer,
    },
    preloadedState,
  });
}

interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  preloadedState?: any;
  store?: ReturnType<typeof createTestStore>;
}

// Custom render function that includes all providers
export function renderWithProviders(
  ui: ReactElement,
  {
    preloadedState = {},
    store = createTestStore(preloadedState),
    ...renderOptions
  }: CustomRenderOptions = {}
) {
  function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <Provider store={store}>
        <ThemeProvider theme={seniorTheme}>
          <BrowserRouter>
            {children}
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    );
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

// Re-export everything from React Testing Library
export * from '@testing-library/react';
export { renderWithProviders as render };
