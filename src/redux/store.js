import { configureStore } from '@reduxjs/toolkit';

// Example of a slice reducer
import counterReducer from './slices/counterSlice';
import usersSliceReducer from './slices/usersSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersSliceReducer,
  },
});

export default store;