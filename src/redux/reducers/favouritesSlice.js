
import { createSlice } from '@reduxjs/toolkit';

export const favouritesSlice = createSlice({
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


export const { addToFavorites, removeFromFavorites } = favouritesSlice.actions;
export default favouritesSlice.reducer;
