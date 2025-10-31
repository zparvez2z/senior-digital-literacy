import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UIState {
  theme: 'normal' | 'high-contrast';
  fontSize: 'normal' | 'large' | 'extra-large';
  sidebarOpen: boolean;
  modalOpen: boolean;
  modalContent: string | null;
  notification: {
    message: string;
    type: 'success' | 'error' | 'info' | 'warning';
    visible: boolean;
  } | null;
  reducedMotion: boolean;
}

const initialState: UIState = {
  theme: 'normal',
  fontSize: 'normal',
  sidebarOpen: true,
  modalOpen: false,
  modalContent: null,
  notification: null,
  reducedMotion: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<'normal' | 'high-contrast'>) => {
      state.theme = action.payload;
    },
    setFontSize: (
      state,
      action: PayloadAction<'normal' | 'large' | 'extra-large'>
    ) => {
      state.fontSize = action.payload;
    },
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    setSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.sidebarOpen = action.payload;
    },
    openModal: (state, action: PayloadAction<string>) => {
      state.modalOpen = true;
      state.modalContent = action.payload;
    },
    closeModal: (state) => {
      state.modalOpen = false;
      state.modalContent = null;
    },
    showNotification: (
      state,
      action: PayloadAction<{
        message: string;
        type: 'success' | 'error' | 'info' | 'warning';
      }>
    ) => {
      state.notification = {
        ...action.payload,
        visible: true,
      };
    },
    hideNotification: (state) => {
      if (state.notification) {
        state.notification.visible = false;
      }
    },
    setReducedMotion: (state, action: PayloadAction<boolean>) => {
      state.reducedMotion = action.payload;
    },
  },
});

export const {
  setTheme,
  setFontSize,
  toggleSidebar,
  setSidebarOpen,
  openModal,
  closeModal,
  showNotification,
  hideNotification,
  setReducedMotion,
} = uiSlice.actions;

export default uiSlice.reducer;
