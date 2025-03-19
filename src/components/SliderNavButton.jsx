import '../styles/SliderNavButton.css'
import PropTypes from 'prop-types'

function SliderNavButton({ src, alt, darkmodeBool, moveSlide, totalSlides }) {
  return (
    <button 
      onClick={() => moveSlide(false)}
      className={ `${darkmodeBool ? '' : 'sliderNavButtons-light'} ${totalSlides < 2 ? 'sliderNavButtons-disabled' : ''}` }
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
  totalSlides: PropTypes.number.isRequired
}

export { SliderNavButton }