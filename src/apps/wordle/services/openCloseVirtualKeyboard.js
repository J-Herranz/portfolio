// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
/**
 * Shows or hides the virtual keyboard by toggling its visibility
 * 
 * @param {Object} params - Object containing all parameters
 * @param {function} params.setShowVirtualKeyboard - setter for the Wordle state: showVirtualKeyboard 
 * @param {boolean} params.showVirtualKeyboard - boolean indicating the previous value for showing or hiding the virtual keyboard
 * @param {Object} params.openCloseMessageObj - contains the text for the button to open or close the virtual keyboard
 */
function openCloseVirtualKeyboard({ setShowVirtualKeyboard, showVirtualKeyboard, openCloseMessageObj }) {
  const virtualKeyboard = document.getElementsByClassName('virtual-keyboard')[0] // virtual keyboard
  const openCloseKeyboard = document.getElementsByClassName('openCloseKeyboard')[0] // open/close virtual keyboard button

  setShowVirtualKeyboard(!showVirtualKeyboard)
  // hide keyboard + change open/close button message
  if (showVirtualKeyboard) {
    virtualKeyboard.style.transform = 'translateY(0px)'
    openCloseKeyboard.innerHTML = openCloseMessageObj?.open
  }
  // show keyboard + change open/close button message
  else {
    virtualKeyboard.style.transform = 'translateY(190px)'
    openCloseKeyboard.innerHTML = openCloseMessageObj?.close
  }
}

export { openCloseVirtualKeyboard }