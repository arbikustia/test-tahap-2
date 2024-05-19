import { useAppSelector } from '@/Store/Hooks';
import { Mode } from '@/Types/DarkMode.types';
import { useEffect } from 'react';

export default function useDarkMode() {
  const theme = useAppSelector((state) => state.darkMode.theme);
  const colorTheme: Mode = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    // save theme to local storage
    localStorage.setItem('theme', theme);
  }, [theme, colorTheme]);

  return { colorTheme };
}
