import { configureStore } from '@reduxjs/toolkit';
import { tabacoReducer, userReducer } from './reducer';

const store = configureStore({
  reducer: {
    tabacoReducer,
    userReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});
export default store;
