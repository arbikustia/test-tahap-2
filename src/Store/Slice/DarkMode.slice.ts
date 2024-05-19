import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { DarkModeState, Mode } from '@/Types/DarkMode.types';

const initialState: DarkModeState = {
  theme: localStorage.getItem('theme') as Mode,
  isDarkMode: localStorage.getItem('theme') === 'dark' ? true : false
};

const DarkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Mode>) => {
      state.theme = action.payload;
      state.isDarkMode = action.payload === 'dark' ? true : false;
    }
  }
});

export default DarkModeSlice.reducer;
export const { setTheme } = DarkModeSlice.actions;
