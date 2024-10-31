// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
/**
 * Simulates the pressing of a key according to the key value passed as a parameter
 * 
 * @param {Object} params - Object containing all parameters
 * @param {string} params.keyValue - character corresponding to the pressed key on the virtual keyboard
 */

function virtualButtonClick({ keyValue }) {
  // setting key code for backspace
  keyValue = keyValue === '←' ? 'Backspace' : keyValue

  //console.log(`Pressed key: ${keyValue}`); // Debug

  // creation of keyboard event (keydown)
  const event = new KeyboardEvent('keydown', {
    key: keyValue,
    code: keyValue === 'Ñ' ? 'KeyÑ' : `Key${keyValue}`,
    char: keyValue,
    bubbles: true,
    cancelable: true
  });

  // throwing event
  document.dispatchEvent(event);
}

export { virtualButtonClick }