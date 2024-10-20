import { useState, useContext, useEffect } from 'react';
import { KeyboardKey } from './KeyboardKey.jsx';
import { openCloseVirtualKeyboard } from '../service/openCloseVirtualKeyboard.js';
import { LanguageContext } from '../../../context/LanguageContext.js';
import { ThemeContext } from '../../../context/ThemeContext.js';
import PropTypes from 'prop-types';
import '../styles/virtualKeyboard.css';

function VirtualKeyboard() {
  const { t, languageCode } = useContext(LanguageContext)
  const { darkmodeBool } = useContext(ThemeContext)
  const [keyboardLayout, setKeyboardLayout] = useState(null);
  const [showVirtualKeyboard, setShowVirtualKeyboard] = useState(false);

  const languageCodeToDemonym = { en: "english", es: "spanish", fr: "french" };

  useEffect(() => {
    const loadKeyboard = async () => {
      if (languageCodeToDemonym[languageCode]) {
        try {
          const keyboardData = await import(`../resources/keyboards/${languageCodeToDemonym[languageCode]}_keyboard.json`);
          setKeyboardLayout(keyboardData.default);
        } catch (error) {
          console.error('Error loading keyboard layout:', error);
        }
      } else {
        console.log(`${t?.subAppInfo?.keyboardLanguageError} "${languageCode}"`);
      }
    };

    loadKeyboard();
  }, [languageCode, t]);

  return (
    <>
      {keyboardLayout &&
        <div className="openCloseKeyboard"
          onClick={() => openCloseVirtualKeyboard({ setShowVirtualKeyboard, showVirtualKeyboard, openCloseMessageArray: [t?.subAppInfo?.closeVirtualKeyboard, t?.subAppInfo?.openVirtualKeyboard] })}>
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