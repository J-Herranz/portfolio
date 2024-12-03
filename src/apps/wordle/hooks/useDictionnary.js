import { useState, useEffect, useContext } from 'react';
import { LanguageContext } from '../../../context/LanguageContext';

function useDictionnary({ gameRestart }) {
  const { languageCode } = useContext(LanguageContext);
  const [dictionnary, setDictionnary] = useState([]);

  useEffect(() => {
    const loadDictionnary = async () => {
      if (!languageCode) return;

      try {
        //const response = await import(`../../../../public/dictionaries/${languageCode}.json`);
        const response = await import(`../../../../public/dictionaries/${languageCode}.json`);
        setDictionnary(response.default);
      } catch (error) {
        console.error(error);
      }
    };

    loadDictionnary();
    gameRestart()
  }, [languageCode]);

  return dictionnary;
};

export { useDictionnary }
