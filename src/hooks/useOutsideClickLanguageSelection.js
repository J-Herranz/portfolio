import { useEffect } from 'react';

const useOutsideClickLanguageSelection = (ref, callback, isActive = true) => {
  useEffect(() => {
    // If it is not active, the listener is not added
    if (!isActive) return;

    const handleClickOutside = (event) => {
      // If the click is outside the referenced container, the callback is executed
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref, callback, isActive]);
};

export { useOutsideClickLanguageSelection }