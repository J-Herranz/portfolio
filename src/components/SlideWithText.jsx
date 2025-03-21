import {  useContext, useState, useEffect } from 'react'
//import { LanguageContext } from '../../../context/LanguageContext.js'
import { ThemeContext } from '../context/ThemeContext'
import '../styles/slideWithText.css'
import PropTypes from 'prop-types'
import { getImageResults, imageToShow } from '../services/slideWithTextUtils'

function SlideWithText ({ viewNb, imgFolder, imageName, imageAlt, imageFormat, imageSuffixes, imageText, slideIndex, setImageViewTypes, portraitClass }) {

  const { darkmodeBool } = useContext(ThemeContext)
  const [imageViewStatus, setImageViewStatus] = useState(null);

  const imageUrl = `/assets/${imgFolder}/${imageName}`;

  useEffect(() => {
    // Asynchronous function to get the image results
    getImageResults({ imageUrl, imageSuffixes, imageFormat, setImageViewStatus, setImageViewTypes, slideIndex });
  }, [])

  return (
    <div className={`slideContainerDiv ${portraitClass}`}>
      <img src={ imageToShow({ imageUrl, imageSuffixes, imageFormat, imageViewStatus, viewNb }) } alt={imageAlt}/>
      <p style={!darkmodeBool ? {} : { color: 'black' } }>{`${imageText}`}</p>
    </div>
  );
}

SlideWithText.propTypes = {
  viewNb: PropTypes.number.isRequired,
  imgFolder: PropTypes.string.isRequired,
  imageName: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  imageFormat: PropTypes.string.isRequired,
  imageSuffixes: PropTypes.array.isRequired,
  imageText: PropTypes.string.isRequired,
  slideIndex: PropTypes.number.isRequired,
  setImageViewTypes: PropTypes.func.isRequired,
  portraitClass: PropTypes.string.isRequired
}

export { SlideWithText }