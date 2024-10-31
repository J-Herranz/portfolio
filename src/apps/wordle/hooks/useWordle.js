import { useState, useEffect, useContext } from 'react';
import { useDictionnary } from '../hooks/useDictionnary.js';
import { useGrid } from '../hooks/useGrid.js';
import { LanguageContext } from '../../../context/LanguageContext';

import { handlePlayerInput_backspace, handlePlayerInput_characters, handlePlayerInput_enter, resetAlphabetArray, resetBoard, wordleWordPicker } from '../services/gameLogic.js'

const useWordle = () => {
  const { languageCode, t } = useContext(LanguageContext);
  const [targetWord, setTargetWord] = useState('');
  const [gameStart, setGameStart] = useState(false);
  const dictionnary = useDictionnary({ gameRestart });
  const { attempNb, setAttempNb, currentCell, setCurrentCell, gridContent, setGridContent } = useGrid({ dictionnary });
  const [alphabetArray, setAlphabetArray] = useState(() => resetAlphabetArray({ languageCode }));

  useEffect(() => {
    setAlphabetArray(() => resetAlphabetArray({ languageCode }));
  }, [languageCode]);

  const handlePlayerInput = (letter) => {
    if (gameStart) {
      if (letter.match(/^[A-ZÑ]$/)) {
        handlePlayerInput_characters({ setGridContent, letter, attempNb, currentCell, setCurrentCell })
      }

      if (letter === 'BACKSPACE') {
        handlePlayerInput_backspace({ setGridContent, attempNb, currentCell, setCurrentCell })
      }

      if (letter === 'ENTER') {
        handlePlayerInput_enter({ setGridContent, dictionnary, targetWord, attempNb, setAttempNb, t, setCurrentCell, setGameStart, alphabetArray })
      }
    }
  };

  function gameRestart() {
    setTargetWord('');
    setGameStart(false);
    resetBoard({ setAttempNb, setGridContent, setCurrentCell });
  };

  const handleNewGameClick = (event) => {
    event.target.blur();
    resetBoard({ setAttempNb, setGridContent, setCurrentCell });
    setTargetWord(wordleWordPicker({ dictionnary }));
    setGameStart(true);
    setAlphabetArray(resetAlphabetArray({ languageCode }));
  };

  return {
    targetWord,
    gameStart,
    alphabetArray,
    handlePlayerInput,
    handleNewGameClick,
    gridContent,
    t
  };
};

export { useWordle }