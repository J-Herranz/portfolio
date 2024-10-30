import { useEffect } from 'react';

const useKeyboardInput = (handlePlayerInput) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      const letter = event.key.toUpperCase();
      if (letter.match(/^[A-ZÑ]$/) || letter === 'ENTER' || letter === 'BACKSPACE') {
        handlePlayerInput(letter);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handlePlayerInput]);
};

export { useKeyboardInput }