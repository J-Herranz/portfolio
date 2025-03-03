import { useState, useContext } from 'react';
import { useVirtualKeyboard } from '../hooks/useVirtualKeyboard.js';
import { KeyboardKey } from './KeyboardKey.jsx';
import { openCloseVirtualKeyboard } from '../services/openCloseVirtualKeyboard.js';
import { LanguageContext } from '../../../context/LanguageContext.js';
import { ThemeContext } from '../../../context/ThemeContext.js';
import PropTypes from 'prop-types';
import '../styles/virtualKeyboard.css';

function VirtualKeyboard({ alphabetArray }) {
  const { t, languageCode } = useContext(LanguageContext)
  const { darkmodeBool } = useContext(ThemeContext)
  const [showVirtualKeyboard, setShowVirtualKeyboard] = useState(false);
  const { keyboardLayout } = useVirtualKeyboard({ languageCode })

  const backgroundColorClassSelector = (letter) => {
    const a = alphabetArray.find(item => item.letter === letter)?.state

    return a ? a : 'key-notChecked'
  }

  return (
    <>
      <div className='virtualKeyboardContainer-div'>
        {keyboardLayout &&
          <div className="openCloseKeyboard"
            onClick={() => openCloseVirtualKeyboard({ setShowVirtualKeyboard, showVirtualKeyboard, openCloseMessageObj: { close: t?.wordle?.closeVirtualKeyboard, open: t?.wordle?.openVirtualKeyboard } })}>
            {t?.wordle?.openVirtualKeyboard}</div>}
        <div className="virtual-keyboard-container">
          <div className="virtual-keyboard" style={darkmodeBool ? { backgroundColor: "#ccc" } : { backgroundColor: "#999" }}>
            {keyboardLayout && showVirtualKeyboard && keyboardLayout.map((keyboardLine, i) => (
              <div key={i} className="keyboard-line">
                {keyboardLine.map((letter, j) => (
                  <KeyboardKey letter={letter} key={`${i}${j}`} backgroundColorClass={backgroundColorClassSelector(letter)} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// Prop validation
VirtualKeyboard.propTypes = {
  alphabetArray: PropTypes.array.isRequired,
};

export { VirtualKeyboard };