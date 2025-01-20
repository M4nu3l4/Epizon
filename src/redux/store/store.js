import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from '../reducers/favouritesSlice'; 

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,  
  },
});

export default store; 

