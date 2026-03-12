import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import './ThemeToggle.css';

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        // Check for saved theme preference
        const savedTheme = localStorage.getItem('app-theme');
        if (savedTheme === 'light') {
            setIsDarkMode(false);
            document.documentElement.classList.add('light-mode');
        } else {
            setIsDarkMode(true);
            document.documentElement.classList.remove('light-mode');
        }
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(prev => {
            const newValue = !prev;
            if (newValue) {
                document.documentElement.classList.remove('light-mode');
                localStorage.setItem('app-theme', 'dark');
            } else {
                document.documentElement.classList.add('light-mode');
                localStorage.setItem('app-theme', 'light');
            }
            return newValue;
        });
    };

    return (
        <motion.button
            className="theme-toggle interactive"
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle Theme"
        >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </motion.button>
    );
};

export default ThemeToggle;
