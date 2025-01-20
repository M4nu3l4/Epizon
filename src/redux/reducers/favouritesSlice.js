import { createSlice } from '@reduxjs/toolkit';

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [],  
  reducers: {
    addToFavorites: (state, action) => {
      state.push(action.payload);  
    },
    removeFromFavorites: (state, action) => {
      return state.filter(job => job._id !== action.payload._id);  
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;


