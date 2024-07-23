// import React, { createContext, useState, useContext } from 'react';

// const ThemeContext = createContext();
// export const ThemeProvider = ({ children }) => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleTheme = () => {
//     setIsDarkMode(prevMode => !prevMode);
//   };

//   return (
//     <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = () => useContext(ThemeContext);

import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

const loadFromLocalStorage = () => {
  const storedValue = localStorage.getItem('isDarkMode');
  return storedValue !== null ? JSON.parse(storedValue) : false;
};

const saveToLocalStorage = (isDarkMode) => {
  localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(loadFromLocalStorage);

  useEffect(() => {
    saveToLocalStorage(isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);