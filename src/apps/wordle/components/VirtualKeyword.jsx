import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/VirtualKeyword.css';

function VirtualKeyword({ t, languageCode, darkModeBool }) {
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

  const virtualButtonClick = (keyValue) => {
    keyValue = keyValue === '←' ? 'Backspace' : keyValue
    console.log(`Tecla presionada: ${keyValue}`);
    // Crear y disparar el evento de teclado
    const event = new KeyboardEvent('keydown', { key: keyValue, bubbles: true });
    document.dispatchEvent(event);
  };

  function capitalizeFirstLetter(string) {
    if (!string) return ''; // Maneja cadenas vacías
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  function pepe() {
    const vara = document.getElementsByClassName('virtual-keyboard')[0]
    setShowVirtualKeyboard(!showVirtualKeyboard)
    if (showVirtualKeyboard) {
      vara.style.transform = 'translateY(0px)'
    } else {
      vara.style.transform = 'translateY(190px)'

    }
  }

  return (
    <>
      {/*keyboardLayout && <div onClick={() => setShowVirtualKeyboard(!showVirtualKeyboard)}>{t?.subAppInfo?.openVirtualKeyboard}</div>*/}
      {keyboardLayout && <div onClick={() => pepe()}>{t?.subAppInfo?.openVirtualKeyboard}</div>}
      <div className="virtual-keyboard-container">
        <div className="virtual-keyboard" style={darkModeBool ? { backgroundColor: "#ccc" } : { backgroundColor: "#999" }}>
          {keyboardLayout && showVirtualKeyboard && keyboardLayout.map((keyboardLine, i) => (
            <div key={i} className="keyboard-line">
              {keyboardLine.map((letter, j) => (
                <button key={`${i}${j}`} className="keyboard-button" onClick={() => virtualButtonClick(capitalizeFirstLetter(letter))}>
                  {letter}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// Prop validation
VirtualKeyword.propTypes = {
  t: PropTypes.object.isRequired,
  languageCode: PropTypes.string.isRequired,
  darkModeBool: PropTypes.bool.isRequired,
};

export { VirtualKeyword };