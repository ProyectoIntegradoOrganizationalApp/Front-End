import { createContext } from 'react';

interface ThemeContextInterface {
    darkMode: boolean,
    setDarkMode: (darkMode: boolean) => void
}

export const ThemeContext = createContext<ThemeContextInterface>({
    darkMode: false,
    setDarkMode: () => {}
});