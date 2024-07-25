import { configureStore } from '@reduxjs/toolkit';
import retreatsReducer from './retreatsSlice';

export default configureStore({
  reducer: {
    retreats: retreatsReducer,
  },
})