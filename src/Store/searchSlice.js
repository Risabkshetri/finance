import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchTerm: '',
    results: [],
    suggestions: [],
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setSearchResults: (state, action) => {
      state.results = action.payload;
    },
    setSuggestions: (state, action) => {
      state.suggestions = action.payload;
    },
  },
});

export const { setSearchTerm, setSearchResults, setSuggestions } = searchSlice.actions;
export default searchSlice.reducer;