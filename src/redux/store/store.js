import { configureStore } from '@reduxjs/toolkit';
import favouritesReducer  from '../reducers/favouritesSlice';

export const store = configureStore({
  reducer: {
    favourites: favouritesReducer,
  },
});

export default store; 

