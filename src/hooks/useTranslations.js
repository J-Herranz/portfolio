import { useState, useEffect } from 'react';

const useTranslations = (language) => {
  //const [translations, setTranslations] = useState({ "appNames": "pepito", "tictactoe": "tictactoeRESP", "tetris": "tetrisRESP", "home": "menuRESP" });

  const [translations, setTranslations] = useState();

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const response = await import(`../resources/translations/${language}.json`);
        setTranslations(response);
      } catch (error) {
        console.error('Error loading translation:', error);
      }
    };

    loadTranslations();
  }, [language]);

  return translations;
};

export { useTranslations };