import { Fragment, useState, useContext, useRef } from 'react'
import { SlideWithText } from './SlideWithText'
import { SliderNavButton } from './SliderNavButton'
import { ThemeContext } from '../context/ThemeContext'
import '../styles/sliderWithText.css'
import PropTypes from 'prop-types'

import { useSliderNavigation } from '../hooks/useSliderNavigation'
import { useSliderTheme } from '../hooks/useSliderTheme'

function SliderWithText ({ content }) {
  const [mobileView, setMobileView] = useState('pc')
  //const [hasMobileView, setHasMobileView] = useState([])
  const imgViewTypes = useRef([])

  const { darkmodeBool } = useContext(ThemeContext);

  const toggleButtonMessage = content?.toggleButtonMessage
  const totalSlides = content?.imageSetInfo?.length
  const [ currentSlideIndex, moveSlide ] = useSliderNavigation({ totalSlides });
  const { leftArrow, rightArrow } = useSliderTheme({ darkmodeBool });


  const hasMobileView = true // 0000000000000000000000000000000000000000000000000000000000000000

  let toggleButtonText
  let slidesContainerSubClass

  if(mobileView === 'mobile') {
    toggleButtonText = toggleButtonMessage?.pc
    slidesContainerSubClass = "mobile"

  } else {
    toggleButtonText = toggleButtonMessage?.mobile
    slidesContainerSubClass = "pc"
  }

console.log(imgViewTypes)
  return (
    <div className='mainSliderDiv'>
      {
        content?.multipleViewsForImage && (
        <div className={`sliderMobileViewToggle ${imgViewTypes[currentSlideIndex].mobile ? '' : 'sliderDisabledButton' }`}>
          <button onClick={ () => setMobileView(mobileView === 'pc' ? 'mobile' : 'pc')}>{ toggleButtonText }</button>
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
                  mobileView={ mobileView } 
                  imgFolder={content.imageFolder} 
                  imageName={value?.imageName} 
                  imageAlt={value?.imageAlt} 
                  imgViewTypes={ imgViewTypes } 
                  imageText= {value.imageText}
                  slideIndex= {index}
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