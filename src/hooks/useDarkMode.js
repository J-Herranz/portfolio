/*import { useRef, useEffect } from 'react';
import Darkmode from 'darkmode-js';

const useDarkMode = () => {
  const darkmodeBool = useRef(true);

  useEffect(() => {
    const options = {
      bottom: '32px',
      right: '32px',
      label: '🌓',
      time: '0.5s',
      onToggle: (isDark) => {
        darkmodeBool.current = isDark;
      }
    };

    const darkmode = new Darkmode(options);
    darkmode.showWidget();
  }, []);

  return darkmodeBool.current;
};

export { useDarkMode };*/

import { useState, useEffect } from 'react';
import Darkmode from 'darkmode-js';

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const options = {
      bottom: '32px',
      right: '32px',
      label: '🌓',
      time: '0.5s',
      onToggle: (isDark) => {
        console.log(`onToggle called: ${isDark}`); // Verificar si se llama
        setIsDarkMode(isDark);
      }
    };

    const darkmode = new Darkmode(options);
    darkmode.showWidget();
    console.log("pepito" + darkmode);
    return () => {
      // Aquí podrías limpiar si es necesario
    };
  }, []);

  return isDarkMode;
};

export { useDarkMode };