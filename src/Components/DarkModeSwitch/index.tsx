import useDarkMode from '@/Hooks/useDarkMode';
import { useAppDispatch } from '@/Store/Hooks';
import { setTheme } from '@/Store/Slice/DarkMode.slice';

const DarkModeSwitch = () => {
  const dispatch = useAppDispatch();
  const { colorTheme } = useDarkMode();

  const toggleDarkMode = () => {
    dispatch(setTheme(colorTheme));
  };
  return (
    <label className="inline-flex items-center cursor-pointer bg-transparent">
      <input type="checkbox" value="" className="sr-only peer" />
      <div
        onClick={toggleDarkMode}
        className="relative w-20 h-10 bg-grey-50 dark:bg-grey-500 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:rounded-full after:h-9 after:w-9 after:transition-all after:duration-300 after:bg-[url('@/assets/icons/sun.svg')] dark:after:bg-[url('@/assets/icons/moon.svg')] after:bg-no-repeat after:bg-cover after:bg-white-50 dark:after:bg-grey-400 dark:border-gray-600"></div>
    </label>
  );
};

export default DarkModeSwitch;
