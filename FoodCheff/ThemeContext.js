import React, { createContext, useState, useEffect, useContext } from 'react';

// 1. Create the Context
const ThemeContext = createContext();

// 2. Create the Provider Component
export const ThemeProvider = ({ children }) => {
  // Check localStorage so it remembers the user's preference on refresh
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('foodcheff-theme');
    return savedTheme === 'dark';
  });

  // Toggle function
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Update localStorage and HTML body class whenever theme changes
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('foodcheff-theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('foodcheff-theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Custom Hook for easy consumption
export const useTheme = () => useContext(ThemeContext);