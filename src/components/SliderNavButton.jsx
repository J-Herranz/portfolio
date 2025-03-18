import PropTypes from 'prop-types'

function SliderNavButton({ src, alt, darkmodeBool, moveSlide }) {
  return (
    <button 
      onClick={() => moveSlide(false)}
      className={darkmodeBool ? '' : 'sliderNavButtons-light' }
    >
      <img src={ src } alt={ alt } />
    </button>
  );
}

SliderNavButton.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  darkmodeBool: PropTypes.bool.isRequired,
  moveSlide: PropTypes.func.isRequired,
}

export { SliderNavButton }