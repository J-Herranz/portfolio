function virtualButtonClick(keyValue) {
  keyValue = keyValue === '←' ? 'Backspace' : keyValue
  console.log(`Tecla presionada: ${keyValue}`);
  const event = new KeyboardEvent('keydown', {
    key: keyValue,
    code: keyValue === 'Ñ' ? 'KeyÑ' : `Key${keyValue}`,
    char: keyValue,
    bubbles: true,
    cancelable: true
  });
  document.dispatchEvent(event);
}

export { virtualButtonClick }