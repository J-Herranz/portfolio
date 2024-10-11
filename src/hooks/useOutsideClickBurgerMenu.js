import { useState, useEffect, useRef } from 'react';

const useOutsideClickBurgerMenu = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const menuRef = useRef();

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      closeMenu();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return { isOpen, setIsOpen, menuRef, closeMenu };
};

export { useOutsideClickBurgerMenu };
