import { Fragment, useState, useContext } from 'react'
import { SlideWithText } from './SlideWithText'
import { SliderNavButton } from './SliderNavButton'
import { ThemeContext } from '../context/ThemeContext'
import '../styles/sliderWithText.css'
import PropTypes from 'prop-types'

import { useSliderNavigation } from '../hooks/useSliderNavigation'
import { useSliderTheme } from '../hooks/useSliderTheme'

function SliderWithText ({ content }) {
  const [mobileView, setMobileView] = useState('pc')
  const [hasMobileView, setHasMobileView] = useState(true)

  const { darkmodeBool } = useContext(ThemeContext);
  const toggleButtonMessage = content?.toggleButtonMessage
  const totalSlides = content?.imageSetInfo?.length

  let toggleButtonText
  let slidesContainerSubClass

  if(mobileView === 'mobile') {
    toggleButtonText = toggleButtonMessage?.pc
    slidesContainerSubClass = "mobile"

  } else {
    toggleButtonText = toggleButtonMessage?.mobile
    slidesContainerSubClass = "pc"
  }

  const [ moveSlide ] = useSliderNavigation({ totalSlides });
  const { leftArrow, rightArrow } = useSliderTheme({ darkmodeBool });

  return (
    <div className='mainSliderDiv'>
      {
        content?.multipleViewsForImage && (
        <div className={`sliderMobileViewToggle ${hasMobileView ? '' : 'sliderDisabledButton' }`}>
          <button onClick={ () => setMobileView(mobileView === 'pc' ? 'mobile' : 'pc')}>{ toggleButtonText }</button>
        </div>
        )
      }
      <div className={`sliderContainer ${slidesContainerSubClass}`}>
        <div className='slider'>
        {
          !content || !Array.isArray(content.imageSetInfo) || content.imageSetInfo.length < 1 ? <h1>"App content not found"</h1> : 
          content.imageSetInfo.map((value, index) => {
            return (
              <Fragment key={index}>
              <SlideWithText 
                mobileView={ mobileView } 
                imgFolder={content.imageFolder} 
                imageName={value?.imageName} 
                imageAlt={value?.imageAlt} 
                setHasMobileView={ setHasMobileView } 
                imageText= {value.imageText}
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