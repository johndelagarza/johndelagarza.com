import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './theme/globalStyles';
import { lightTheme, darkTheme } from './theme/theme';

import NavBar from './components/NavBar';
import Welcome from './sections/Welcome';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  const [theme, setTheme] = useState('light');

    useEffect(()=> {
        let theme = localStorage.getItem('theme');
        if (!theme) localStorage.setItem('theme', 'light');
        return setTheme(theme);
    }, []);

    const changeTheme = () => {
      let currentTheme = localStorage.getItem('theme');
      if (currentTheme === 'light') {
        setTheme('dark');
        return localStorage.setItem('theme', 'dark');
      } else {
        setTheme('light');
        return localStorage.setItem('theme', 'light');
      }
    };

  return (
    <div>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
        <NavBar theme={theme} changeTheme={changeTheme} />
        <Welcome />
        <Projects />
        <Contact />
      </ThemeProvider>
    </div> 
  )
};

export default App;