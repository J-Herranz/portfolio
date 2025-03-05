import { useState, useContext } from 'react'
import { SlideWithText } from './SlideWithText'
import { LanguageContext } from '../../../context/LanguageContext.js'
import { ThemeContext } from '../../../context/ThemeContext.js'
import '../styles/sliderWithText.css'
import PropTypes from 'prop-types'

function SliderWithText ({ appCode, content, imgFolder, multipleViewsForImage }) {
  const [mobileView, setMobileView] = useState('pc')
  const [hasMobileView, setHasMobileView] = useState(true)

  const { t, languageCode } = useContext(LanguageContext);
  const { darkmodeBool } = useContext(ThemeContext);

  const toggleButtonMessage = t[appCode]?.toggleButtonMessage

  const toggleButtonText = mobileView ? toggleButtonMessage?.pc : toggleButtonMessage?.mobile

  return (
    <>
      {
        multipleViewsForImage && (
        <div className={`sliderMobileViewToggle ${hasMobileView ? 'sliderDisabledButton' : ''}`}>
          <button onClick={ () => setMobileView(() => mobileView === 'pc' ? 'mobile' : 'pc')}>{ toggleButtonText }</button>
        </div>
        )
      }
      {
        !content || !Array.isArray(content) || content.length < 1 ? <h1>"App content not found"</h1> : 
        content.map((value, index) => {
            <SlideWithText mobileView={ mobileView } imgFolder={imgFolder} imageName={content.imageName} id={index} setHasMobileView={ setHasMobileView }/>
        }) 
      }
    </>
  );
}

SliderWithText.propTypes = {
  appCode: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired,
  imgFolder: PropTypes.string.isRequired,
  multipleViewsForImage: PropTypes.bool.isRequired
}

export { SliderWithText }