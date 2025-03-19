import {  useContext } from 'react'
//import { LanguageContext } from '../../../context/LanguageContext.js'
import { ThemeContext } from '../context/ThemeContext'
import '../styles/slideWithText.css'
import PropTypes from 'prop-types'


function SlideWithText ({ mobileView, imgFolder, imageName, imageAlt, imageText, setHasMobileView }) {

  const { darkmodeBool } = useContext(ThemeContext)




/*
  const imageUrl = `/assets/${imgFolder}/${imageName}_${mobileView}.jpg`;

  const checkImageExists = async () => {
    try {
      const response = await fetch(imageUrl, { method: 'HEAD' });  // Usamos 'HEAD' para solo obtener los encabezados
      if (response.ok) {
        setImageExists(true);  // La imagen existe si la respuesta es 200 OK
      } else {
        setImageExists(false);  // Si la respuesta no es 200, la imagen no existe
      }
    } catch (error) {
      setImageExists(false);  // Si hay un error en la solicitud, la imagen no existe
    }
  };

  checkImageExists();
*/















  return (
    <div className='slideContainerDiv'>
      <img src={`/assets/${imgFolder}/${imageName}_${mobileView}.jpg`} alt={imageAlt}/>
      <p style={darkmodeBool ? {} : { color: 'black' } }>{`${imageText}`}</p>
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