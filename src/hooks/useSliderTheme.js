function useSliderTheme({ darkmodeBool }) {

  let leftArrow, rightArrow;

  if (darkmodeBool) {
    leftArrow = '/assets/app-icons/arrowLeft_white.png';
    rightArrow = '/assets/app-icons/arrowRight_white.png';
  } else {
    leftArrow = '/assets/app-icons/arrowLeft_black.png';
    rightArrow = '/assets/app-icons/arrowRight_black.png';
  }

  return { leftArrow, rightArrow };
}

export { useSliderTheme };