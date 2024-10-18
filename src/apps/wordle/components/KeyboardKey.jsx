import { capitalizeFirstLetter } from '../service/capitalizeFirstLetter.js'
import { virtualButtonClick } from '../service/virtualButtonClick.js'
import PropTypes from 'prop-types';
import '../styles/keyboardKey.css'

function KeyboardKey({ letter }) {

  return (
    <button className="keyboard-button" onClick={() => virtualButtonClick(capitalizeFirstLetter(letter))}>
      {letter}
    </button>
  );
}

// Prop validation
KeyboardKey.propTypes = {
  letter: PropTypes.string.isRequired,
};

export { KeyboardKey }