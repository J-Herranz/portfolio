import { useState, useEffect } from 'react';
import Darkmode from 'darkmode-js';

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const options = {
      time: '0.5s',
      label: '🌓',
    };

    const darkmode = new Darkmode(options);
    darkmode.showWidget();
    const currentMode = darkmode.isActivated();
    setIsDarkMode(currentMode);

    // Manejador de click en el botón del widget
    const button = document.querySelector('.darkmode-toggle');
    if (button) {
      button.addEventListener('click', () => {
        const currentMode = darkmode.isActivated();
        setIsDarkMode(currentMode);
      });
    }

    return () => {
      if (button) {
        button.removeEventListener('click', () => { });
      }
    };
  }, []);

  return isDarkMode;
};

export { useDarkMode }