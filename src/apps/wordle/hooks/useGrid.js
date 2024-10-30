import { useState, useEffect } from 'react';
import { resetBoard } from '../services/gameLogic';

const useGrid = ({ dictionnary }) => {
  const [attempNb, setAttempNb] = useState(0);
  const [currentCell, setCurrentCell] = useState(0);
  const [gridContent, setGridContent] = useState(Array.from({ length: 6 }, () =>
    Array.from({ length: 5 }, () => ({ state: 0, innerValue: '' }))
  ));

  useEffect(() => {
    resetBoard({ setAttempNb, setGridContent, setCurrentCell });
  }, [dictionnary]);

  return { attempNb, setAttempNb, currentCell, setCurrentCell, gridContent, setGridContent };
};

export { useGrid }