import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import appwriteService from '../Appwrite/progresConf';

// Helper function to get the current date in YYYY-MM-DD format
const getCurrentDate = () => {
  return new Date().toISOString().split('T')[0];
};

// Async thunk to fetch and update progress
export const fetchAndUpdateProgress = createAsyncThunk(
    'progress/fetchAndUpdate',
    async (_, { getState }) => {
      const state = getState();
      const userId = 'your-user-id'; // Replace with actual user ID or get from auth state
  
      const notesCount = state.notes.length;
      const aiChatsCount = state.aichats.aiChatsCount;
      const { networth, debit, credit } = state.finance;
      const date = getCurrentDate();
  
      // Normalize financial data to fit within Appwrite's constraints
      const normalizedNetworth = Math.min(Math.max(networth, 0), 1000000);
      const normalizedDebit = Math.min(Math.max(debit, 0), 1000000);
      const normalizedCredit = Math.min(Math.max(credit, 0), 1000000);
  
      const progressData = {
        notesCount,
        aiChatsCount,
        networth: normalizedNetworth,
        debit: normalizedDebit,
        credit: normalizedCredit,
        date
      };
  
      const response = await appwriteService.updateProgress(userId, date, progressData);
      return response;
    }
  );

const progressSlice = createSlice({
  name: 'progress',
  initialState: {
    data: [],
    status: 'idle',
    error: null
  },
  reducers: {
    updateProgressLocal: (state, action) => {
      const index = state.data.findIndex(item => item.$id === action.payload.$id);
      if (index !== -1) {
        state.data[index] = action.payload;
      } else {
        state.data.push(action.payload);
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAndUpdateProgress.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAndUpdateProgress.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const index = state.data.findIndex(item => item.$id === action.payload.$id);
        if (index !== -1) {
          state.data[index] = action.payload;
        } else {
          state.data.push(action.payload);
        }
      })
      .addCase(fetchAndUpdateProgress.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { updateProgressLocal } = progressSlice.actions;

export default progressSlice.reducer;