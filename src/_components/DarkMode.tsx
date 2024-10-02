import React from 'react';
import { FiMoon, FiSun } from "react-icons/fi";

interface DarkModeProps {
    className?: string;
}

const DarkMode: React.FC<DarkModeProps> = ({ className }) => {
    const [isDarkMode, setIsDarkMode] = React.useState(() => {
        const savedPreference = localStorage.getItem('darkMode');
        return savedPreference ? JSON.parse(savedPreference) : document.documentElement.classList.contains('dark');
    });

    React.useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e: MediaQueryListEvent) => {
            setIsDarkMode(e.matches);
            if (e.matches) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        };

        mediaQuery.addEventListener('change', handleChange);

        // Set initial value
        if (mediaQuery.matches) {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        }

        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);

    const toggleDarkMode = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('darkMode', JSON.stringify(false));
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('darkMode', JSON.stringify(true));
        }
        setIsDarkMode(!isDarkMode);
    };

    return (
        <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full text-black bg-white dark:bg-black dark:text-white ${className}`}>
            {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
    );
}

export default DarkMode;