import React from 'react';
import { FiMoon, FiSun } from "react-icons/fi";

interface DarkModeProps {
    className?: string;
}

const DarkMode: React.FC<DarkModeProps> = ({ className }) => {
    const [isDarkMode, setIsDarkMode] = React.useState(() => document.documentElement.classList.contains('dark'));

    const toggleDarkMode = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
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