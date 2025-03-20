import {  useContext, useEffect } from 'react'
//import { LanguageContext } from '../../../context/LanguageContext.js'
import { ThemeContext } from '../context/ThemeContext'
import { checkImagesExist } from '../services/checkImagesExist'
import '../styles/slideWithText.css'
import PropTypes from 'prop-types'


function SlideWithText ({ mobileView, imgFolder, imageName, imageAlt, imageText, slideIndex, imgViewTypes }) {

  const { darkmodeBool } = useContext(ThemeContext)

  const imageUrl = `/assets/${imgFolder}/${imageName}`;

  useEffect(() => {
  // Función asincrónica para obtener los resultados de las imágenes
  const getImageResults = async () => {
    const [imgResult] = await checkImagesExist({
      urls: [imageUrl],
      imgSuffixes: ['pc', 'mobile'],
      imgFormat: 'jpg',
    });

    // Asignar los resultados directamente al array `imgViewTypes` en la posición correcta
    imgViewTypes[slideIndex] = imgResult;
  };

  // Llamada inmediata a la función asincrónica para obtener el resultado de la imagen
  getImageResults();
  }, [])



  return (
    <div className='slideContainerDiv'>
      <img src={mobileView ? `${imageUrl}_pc.jpg` : `${imageUrl}_mobile.jpg` } alt={imageAlt}/>
      <p style={!darkmodeBool ? {} : { color: 'black' } }>{`${imageText}`}</p>
    </div>
  );
}

SlideWithText.propTypes = {
  mobileView: PropTypes.string.isRequired,
  imgFolder: PropTypes.string.isRequired,
  imageName: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  imageText: PropTypes.string.isRequired,
  slideIndex: PropTypes.number.isRequired,
  imgViewTypes: PropTypes.object.isRequired
}

export { SlideWithText }