import { createSlice } from '@reduxjs/toolkit';

// Function to load notes from localStorage
const loadNotesFromStorage = () => {
  try {
    const serializedNotes = localStorage.getItem('notes');
    if (serializedNotes === null) {
      return [];
    }
    return JSON.parse(serializedNotes);
  } catch (err) {
    console.error('Error loading notes from localStorage:', err);
    return [];
  }
};

// Function to save notes to localStorage
const saveNotesToStorage = (notes) => {
  try {
    const serializedNotes = JSON.stringify(notes);
    localStorage.setItem('notes', serializedNotes);
  } catch (err) {
    console.error('Error saving notes to localStorage:', err);
  }
};

const noteSlice = createSlice({
  name: 'notes',
  initialState: loadNotesFromStorage(),
  reducers: {
    addNote: (state, action) => {
      state.push(action.payload);
      saveNotesToStorage(state);
    },
    updateNote: (state, action) => {
      const index = state.findIndex(note => note.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
        saveNotesToStorage(state);
      }
    },
    deleteNote: (state, action) => {
      const newState = state.filter(note => note.id !== action.payload);
      saveNotesToStorage(newState);
      return newState;
    },
  },
});

export const { addNote, updateNote, deleteNote } = noteSlice.actions;
export default noteSlice.reducer;