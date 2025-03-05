//import { useState, useContext } from 'react'
//import { LanguageContext } from '../../../context/LanguageContext.js'
//import { ThemeContext } from '../../../context/ThemeContext.js'
import '../styles/slideWithText.css'
import PropTypes from 'prop-types'


function SlideWithText ({ mobileView, imgFolder, imageName, imageAlt, setHasMobileView }) {
const src = `/assets/${imgFolder}/${content.imageName}_${mobileView}.jpg`
  return (
    <>
          <>
            <img src={`${content?.src}`}></img>
            <p>{`${content?.text}`}</p>
          </>
    </>
  );
}

SlideWithText.propTypes = {
  mobileView: PropTypes.string.isRequired,
  imgFolder: PropTypes.string.isRequired,
  imageName: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  setHasMobileView: PropTypes.function.isRequired
}

export { SlideWithText }