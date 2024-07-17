import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import noteReducer from './noteSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    notes: noteReducer,
  },
});