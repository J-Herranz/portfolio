import { useState, useContext } from 'react'
import { SlideWithText } from './SlideWithText'
import { LanguageContext } from '../../../context/LanguageContext.js'
import { ThemeContext } from '../../../context/ThemeContext.js'
import '../styles/sliderWithText.css'
import PropTypes from 'prop-types'

function SliderWithText ({ content }) {
  const [mobileView, setMobileView] = useState('pc')
  const [hasMobileView, setHasMobileView] = useState(true)

  const { t, languageCode } = useContext(LanguageContext);
  const { darkmodeBool } = useContext(ThemeContext);

  const toggleButtonMessage = content?.toggleButtonMessage

  const toggleButtonText = mobileView ? toggleButtonMessage?.pc : toggleButtonMessage?.mobile

  return (
    <>
      {
        content?.multipleViewsForImage && (
        <div className={`sliderMobileViewToggle ${hasMobileView ? 'sliderDisabledButton' : ''}`}>
          <button onClick={ () => setMobileView(() => mobileView === 'pc' ? 'mobile' : 'pc')}>{ toggleButtonText }</button>
        </div>
        )
      }
      {
        !content || !Array.isArray(content) || content.length < 1 ? <h1>"App content not found"</h1> : 
        content.imageSetInfo.map((value, index) => {
            <SlideWithText 
              mobileView={ mobileView } 
              imgFolder={content.imgFolder} 
              imageName={value?.imageName} 
              imageAlt={value?.imageAlt} 
              setHasMobileView={ setHasMobileView } 
              id={index} 
            />
        }) 
      }
    </>
  );
}

SliderWithText.propTypes = {
  content: PropTypes.object.isRequired
}

export { SliderWithText }