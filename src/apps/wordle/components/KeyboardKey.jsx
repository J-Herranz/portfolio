import { useRef } from 'react';
import { capitalizeFirstLetter } from '../services/capitalizeFirstLetter.js'
import { virtualButtonClick } from '../services/virtualButtonClick.js'
import PropTypes from 'prop-types';
import '../styles/keyboardKey.css'

function KeyboardKey({ letter, backgroundColorClass }) {
  const buttonRef = useRef(null);

  const handleClick = () => {
    // simulate button click + capitalize first key letter
    virtualButtonClick({ keyValue: capitalizeFirstLetter({ string: letter }) });

    // take out focus from button
    if (buttonRef.current) {
      buttonRef.current.blur();
    }
  };

  return (
    <button className={`keyboard-button ${backgroundColorClass}`} onClick={handleClick} ref={buttonRef}>
      {letter}
    </button>
  );
}

// Prop validation
KeyboardKey.propTypes = {
  letter: PropTypes.string.isRequired,
  backgroundColorClass: PropTypes.string.isRequired,
};

export { KeyboardKey }