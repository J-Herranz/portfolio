import { useState, useEffect } from "react";

function useVirtualKeyboard({ languageCode }) {

  const [keyboardLayout, setKeyboardLayout] = useState(null);
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
      }
    };

    loadKeyboard();
  }, [languageCode]);

  return { keyboardLayout }
}

export { useVirtualKeyboard }