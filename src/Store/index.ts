import { configureStore } from '@reduxjs/toolkit';
import DarkModeSlice from './Slice/DarkMode.slice';

const store = configureStore({
  reducer: {
    darkMode: DarkModeSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
