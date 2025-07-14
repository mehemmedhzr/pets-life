// constants/theme.js
import { MD3DarkTheme, MD3LightTheme } from 'react-native-paper';

export const lightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#2A71D0',
    background: '#FFFDF9',
    secondary: '#FFD500',
    onPrimary: '#ffffff',
  },
};

export const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#80C4FF',
    background: '#0D0D0D',
    secondary: '#FFD500',
    onPrimary: '#000000',
  },
};
