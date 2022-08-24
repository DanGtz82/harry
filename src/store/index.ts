import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from './characters';

export const store = configureStore({
  reducer: {
    charactersReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
