import {  useContext, useState, useEffect } from 'react'
//import { LanguageContext } from '../../../context/LanguageContext.js'
import { ThemeContext } from '../context/ThemeContext'
import { checkImagesExist } from '../services/checkImagesExist'
import '../styles/slideWithText.css'
import PropTypes from 'prop-types'


function SlideWithText ({ viewNb, imgFolder, imageName, imageAlt, imageFormat, imageSuffixes, imageText, slideIndex, setImageViewTypes }) {

  const { darkmodeBool } = useContext(ThemeContext)
  const [imageViewStatus, setImageViewStatus] = useState(null);

  const imageUrl = `/assets/${imgFolder}/${imageName}`;

  useEffect(() => {
    // Función asincrónica para obtener los resultados de las imágenes
    const getImageResults = async () => {
      const [imgResult] = await checkImagesExist({
        urls: [imageUrl],
        imageSuffixes: imageSuffixes,
        imgFormat: imageFormat,
      });

      setImageViewStatus(imgResult);

      setImageViewTypes(imageViewTypes => {
        if(imageViewTypes){
          const updatedImageViewTypes = [...imageViewTypes];  // Crear una copia del array actual
          updatedImageViewTypes[slideIndex] = imgResult;  // Asignar el resultado en la posición correcta
          return updatedImageViewTypes;  // Retornar la nueva versión del array
        }
      });
    };

    // Llamada inmediata a la función asincrónica para obtener el resultado de la imagen
    getImageResults();
  }, [])
/*
  const imageToShow = () => {
    if(!imageViewStatus) {
      console.log(`imageToShow 1`)
      console.log(imageViewStatus)
      return ''
    }
    const suffix = imageSuffixes?.[viewNb];

    if(suffix && imageViewStatus?.[suffix]) {
      console.log(`imageToShow 2`)
      console.log(imageViewStatus)
      console.log(`${imageUrl}_${suffix}.${imageFormat}`)
      return `${imageUrl}_${suffix}.${imageFormat}`
  }
    for(let i = 0 ; i < imageViewStatus?.length ; i++){    
      const suffix = imageSuffixes[i];  
      if(imageViewStatus?.[suffix]){
        console.log(`imageToShow 3`)
        console.log(`${imageUrl}_${suffix}.${imageFormat}`)
        return `${imageUrl}_${suffix}.${imageFormat}`
      }
    }
    console.log(`no imagetoshow`)
    return ''
  }
*/


const imageToShow = () => {
  if (!imageViewStatus) {
    return ''; // Retorna una cadena vacía si aún no tenemos el estado de la imagen
  }

  // Verifica el sufijo solicitado desde viewNb
  const suffix = imageSuffixes?.[viewNb];

  // Verifica si la imagen con el sufijo específico está disponible en imageViewStatus
  if (suffix && imageViewStatus[suffix]) {
    return `${imageUrl}_${suffix}.${imageFormat}`;
  }

  // Si no se encuentra la imagen con el sufijo específico, busca otro sufijo disponible
  const availableSuffix = Object.keys(imageViewStatus).find(key => imageViewStatus[key] === true);

  // Si encontramos un sufijo disponible, lo usamos
  if (availableSuffix) {
    return `${imageUrl}_${availableSuffix}.${imageFormat}`;
  }
  return ''; // Si no se encuentra ninguna imagen
};


  return (
    <div className='slideContainerDiv'>
      {/*<img src={`${imageUrl}_${imageSuffixes?.[viewNb]}.${imageFormat}` } alt={imageAlt}/>*/}
      <img src={ imageToShow() } alt={imageAlt}/>
      <p style={!darkmodeBool ? {} : { color: 'black' } }>{`${imageText}`}</p>
      <button onClick={() => console.log(imageViewStatus)}>pepe</button>
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
  setImageViewTypes: PropTypes.func.isRequired
}

export { SlideWithText }