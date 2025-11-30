import React, { createContext, useState, useEffect, useContext } from 'react';

const Theme = createContext();

export const ThemeProvider = ({children}) =>{
    const[theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light-theme'
    );

    useEffect(() =>{
        document.body.className= theme;
        localStorage.setItem('theme',theme);
    },[theme]);

    const toggleTheme =() =>{
        setTheme((currentTheme) => (currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme'));
    };

    return(
        <Theme.Provider value={{theme, toggleTheme}}>{children}</Theme.Provider>
    )
};

export const useTheme = () =>{
    return useContext(Theme);
};