import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './cryptoServiceSlice';

export default configureStore({
  reducer: {
    crypto: cryptoReducer,
  },
});
