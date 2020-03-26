import React from 'react';


export const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
    },
    blue: {
        foreground: '#ffffff',
        background: 'blue',
    }
};

export const ThemeContext = React.createContext(
    themes.blue // default value
);
