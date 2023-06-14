import { useEffect, useState } from 'react';

// Comprueba si estamos en modo oscuro o claro con useEffect

export const useInterfaceMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (document.documentElement.classList.contains('dark')) setIsDarkMode(true);
        else setIsDarkMode(false);
    }, []);

    return { isDarkMode };
}