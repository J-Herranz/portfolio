function virtualButtonClick(keyValue) {
  keyValue = keyValue === '←' ? 'Backspace' : keyValue
  console.log(`Tecla presionada: ${keyValue}`);
  const event = new KeyboardEvent('keydown', { key: keyValue, bubbles: true });
  document.dispatchEvent(event);
}

export { virtualButtonClick }