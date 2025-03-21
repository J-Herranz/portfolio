import { Fragment, useState, useContext, useRef } from 'react'
import { SlideWithText } from './SlideWithText'
import { SliderNavButton } from './SliderNavButton'
import { ThemeContext } from '../context/ThemeContext'
import '../styles/sliderWithText.css'
import PropTypes from 'prop-types'

import { useSliderNavigation } from '../hooks/useSliderNavigation'
import { useSliderTheme } from '../hooks/useSliderTheme'

function SliderWithText ({ content }) {
  const [viewNb, setViewNb] = useState(0)
  //const imgViewTypes = useRef([])
  const [imageViewTypes, setImageViewTypes] = useState([])

  const { darkmodeBool } = useContext(ThemeContext);

  const toggleButtonMessage = content?.toggleButtonMessage
  const totalSlides = content?.imageSetInfo?.length
  const [ currentSlideIndex, moveSlide ] = useSliderNavigation({ totalSlides });
  const { leftArrow, rightArrow } = useSliderTheme({ darkmodeBool });

  let toggleButtonText = toggleButtonMessage?.[(viewNb + 1) % toggleButtonMessage.length]
  let slidesContainerSubClass = content?.imageSuffixes?.[(viewNb) % content?.imageSuffixes.length]

  /*
  if(mobileView === 'mobile') {
    toggleButtonText = toggleButtonMessage?.pc
    slidesContainerSubClass = "mobile"

  } else {
    toggleButtonText = toggleButtonMessage?.mobile
    slidesContainerSubClass = "pc"
  }*/

console.log(imageViewTypes)




  const checkIfImageHasMultipleViews = () => {
    let obj = imageViewTypes?.[currentSlideIndex]
    let nbOfAvailableViews = 0

    if (obj) {
      for (let key in obj) {
        if(key === 'url') continue
        nbOfAvailableViews += obj[key] ? 1 : 0
      }
    }
    return nbOfAvailableViews > 1
  }


  const viewsButtonHandlerer = () => {
    setViewNb((viewNb + 1) % toggleButtonMessage.length)
    console.log(`boton toggle apretado ${viewNb}`)
    console.log(`views disponibles: `)
    console.log(imageViewTypes?.[currentSlideIndex])
  }


  return (
    <div className='mainSliderDiv'>
      {
        content?.toggleButtonMessage && (
        <div className={`sliderMobileViewToggle ${checkIfImageHasMultipleViews() ? '' : 'sliderDisabledButton' }`}>
          <button onClick={ viewsButtonHandlerer }>{ toggleButtonText }</button>
        </div>
        )
      }
      <div className={`sliderContainer ${slidesContainerSubClass}`}>
        <div className='slider'>
        {
          !content || !Array.isArray(content.imageSetInfo) || content.imageSetInfo.length < 1 ? 
          <div className="slideContainerDiv" style={{display:'flex', justifyContent:'center', alignItems:'center'}}><h1>"App content not found"</h1></div> : 
          content.imageSetInfo.map((value, index) => {
            return (
              <Fragment key={index}>
                <SlideWithText 
                  viewNb={ viewNb } 
                  imgFolder={content.imageFolder} 
                  imageName={value?.imageName} 
                  imageAlt={value?.imageAlt} 
                  imageFormat={value?.imageFormat}
                  imageSuffixes={content?.imageSuffixes}
                  imageText= {value.imageText}
                  slideIndex= {index}
                  setImageViewTypes={ setImageViewTypes } 
                />
                { index !== content.imageSetInfo.length && <div className="slideContainerDiv" />}
              </Fragment>
            )
          }) 
        }
        </div>
      </div>
      <div className='sliderNavButtons-div'>
        <SliderNavButton src={ leftArrow } alt='Previous image icon' darkmodeBool={ darkmodeBool } moveSlide = { () => moveSlide(false) } totalSlides={totalSlides}/>
        <SliderNavButton src={ rightArrow } alt='Next image icon' darkmodeBool={ darkmodeBool } moveSlide = { () => moveSlide(true) }  totalSlides={totalSlides}/>
      </div> 
    </div>
  );
}

SliderWithText.propTypes = {
  content: PropTypes.object.isRequired
}

export { SliderWithText }