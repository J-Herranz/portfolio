import { useState, useContext } from 'react';
import { useVirtualKeyboard } from '../hooks/useVirtualKeyboard.js';
import { KeyboardKey } from './KeyboardKey.jsx';
import { openCloseVirtualKeyboard } from '../services/openCloseVirtualKeyboard.js';
import { LanguageContext } from '../../../context/LanguageContext.js';
import { ThemeContext } from '../../../context/ThemeContext.js';
import PropTypes from 'prop-types';
import '../styles/virtualKeyboard.css';

function VirtualKeyboard() {
  const { t, languageCode } = useContext(LanguageContext)
  const { darkmodeBool } = useContext(ThemeContext)
  const [showVirtualKeyboard, setShowVirtualKeyboard] = useState(false);
  const { keyboardLayout } = useVirtualKeyboard({ languageCode })

  return (
    <>
      {keyboardLayout &&
        <div className="openCloseKeyboard"
          onClick={() => openCloseVirtualKeyboard({ setShowVirtualKeyboard, showVirtualKeyboard, openCloseMessageObj: { close: t?.subAppInfo?.closeVirtualKeyboard, open: t?.subAppInfo?.openVirtualKeyboard } })}>
          {t?.subAppInfo?.openVirtualKeyboard}</div>}
      <div className="virtual-keyboard-container">
        <div className="virtual-keyboard" style={darkmodeBool ? { backgroundColor: "#ccc" } : { backgroundColor: "#999" }}>
          {keyboardLayout && showVirtualKeyboard && keyboardLayout.map((keyboardLine, i) => (
            <div key={i} className="keyboard-line">
              {keyboardLine.map((letter, j) => (
                <KeyboardKey letter={letter} key={`${i}${j}`} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// Prop validation
VirtualKeyboard.propTypes = {
};

export { VirtualKeyboard };