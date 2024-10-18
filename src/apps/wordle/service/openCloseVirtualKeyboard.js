function openCloseVirtualKeyboard({ setShowVirtualKeyboard, showVirtualKeyboard }) {
  const virtualKeyboard = document.getElementsByClassName('virtual-keyboard')[0]
  setShowVirtualKeyboard(!showVirtualKeyboard)
  if (showVirtualKeyboard) {
    virtualKeyboard.style.transform = 'translateY(0px)'
  } else {
    virtualKeyboard.style.transform = 'translateY(190px)'
  }
}

export { openCloseVirtualKeyboard }