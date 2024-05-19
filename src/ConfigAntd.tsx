import React from 'react';
import { ConfigProvider, theme } from 'antd';
import { useAppSelector } from './Store/Hooks';
const { darkAlgorithm, defaultAlgorithm } = theme;

export default function ConfigProviderAntd({ children }: { children: React.ReactNode }) {
  const { isDarkMode } = useAppSelector((state) => state.darkMode);

  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: 'DM'
        },
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
        components: {
          Input: {
            activeBg: isDarkMode ? '#1B1D20' : '#FBFBFB'
          },
          Message: {
            contentPadding: 0
          }
        }
      }}>
      {children}
    </ConfigProvider>
  );
}
