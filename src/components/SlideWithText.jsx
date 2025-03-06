//import { useState, useContext } from 'react'
//import { LanguageContext } from '../../../context/LanguageContext.js'
//import { ThemeContext } from '../../../context/ThemeContext.js'
import '../styles/slideWithText.css'
import PropTypes from 'prop-types'


function SlideWithText ({ mobileView, imgFolder, imageName, imageAlt, imageText, setHasMobileView }) {

  console.log(`/assets/${imgFolder}/${imageName}_${mobileView}.jpg`)

  return (
    <div className='slideContainerDiv'>
      <img src={`/assets/${imgFolder}/${imageName}_${mobileView}.jpg`} alt={imageAlt}/>
      <p>{`${imageText}`}</p>
    </div>
  );
}

SlideWithText.propTypes = {
  mobileView: PropTypes.string.isRequired,
  imgFolder: PropTypes.string.isRequired,
  imageName: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  imageText: PropTypes.string.isRequired,
  //setHasMobileView: PropTypes.function.isRequired
}

export { SlideWithText }