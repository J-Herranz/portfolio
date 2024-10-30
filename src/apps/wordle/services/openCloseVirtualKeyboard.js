function openCloseVirtualKeyboard({ setShowVirtualKeyboard, showVirtualKeyboard, openCloseMessageObj }) {
  const virtualKeyboard = document.getElementsByClassName('virtual-keyboard')[0]
  const openCloseKeyboard = document.getElementsByClassName('openCloseKeyboard')[0]

  setShowVirtualKeyboard(!showVirtualKeyboard)
  if (showVirtualKeyboard) {
    virtualKeyboard.style.transform = 'translateY(0px)'
    openCloseKeyboard.innerHTML = openCloseMessageObj?.open
  } else {
    virtualKeyboard.style.transform = 'translateY(190px)'
    openCloseKeyboard.innerHTML = openCloseMessageObj?.close
  }
}

export { openCloseVirtualKeyboard }