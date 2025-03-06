import { useState, useContext } from 'react'
import { SlideWithText } from './SlideWithText'
//import { LanguageContext } from '../../../context/LanguageContext.js'
import { ThemeContext } from '../context/ThemeContext'
import '../styles/sliderWithText.css'
import PropTypes from 'prop-types'
// import { arrowLeft_black } from '/assets/app-icons/arrowLeft_black.png'
// import { arrowLeft_white } from '/assets/app-icons/arrowLeft_white.png'
// import { arrowRight_black } from '/assets/app-icons/arrowRight_black.png'
// import { arrowRight_white } from '/assets/app-icons/arrowRight_white.png'

function SliderWithText ({ content }) {
  const [mobileView, setMobileView] = useState('pc')
  const [hasMobileView, setHasMobileView] = useState(true)
  const [slideIndex, setSlideIndex] = useState(0)

  const totalSlides = content.imageSetInfo.length
  //const { t, languageCode } = useContext(LanguageContext);
  const { darkmodeBool } = useContext(ThemeContext);

  const toggleButtonMessage = content?.toggleButtonMessage

  let toggleButtonText
  let slidesContainerSubClass

  if(mobileView === 'mobile') {
    toggleButtonText = toggleButtonMessage?.pc
    slidesContainerSubClass = "mobile"

  } else {
    toggleButtonText = toggleButtonMessage?.mobile
    slidesContainerSubClass = "pc"
  }



  let leftArrow, rightArrow

  if (darkmodeBool){
    leftArrow = '/assets/app-icons/arrowLeft_white.png'
    rightArrow = '/assets/app-icons/arrowRight_white.png'
  } else {
    leftArrow = '/assets/app-icons/arrowLeft_black.png'
    rightArrow = '/assets/app-icons/arrowRight_black.png'
  }
  




  function moveSlide(moveRight) {
    const slides = document.querySelectorAll('.slideContainerDiv');
    const slideWidth = slides[0].offsetWidth; // getting width from slide
  
    let currentIndex
    // increasing index if moving right, decreasing if moving left
    if (moveRight) {
      currentIndex = (slideIndex + 1) % totalSlides;  // next slide
    } else {
      currentIndex = (slideIndex - 1 + totalSlides) % totalSlides;  // previous slide
    }
  
    setSlideIndex(currentIndex) // setting curring slide index

    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }







  return (
    <div className='mainSliderDiv'>
      {
        content?.multipleViewsForImage && (
        <div className={`sliderMobileViewToggle ${hasMobileView ? 'sliderDisabledButton' : ''}`}>
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
              <SlideWithText 
                mobileView={ mobileView } 
                imgFolder={content.imageFolder} 
                imageName={value?.imageName} 
                imageAlt={value?.imageAlt} 
                setHasMobileView={ setHasMobileView } 
                imageText= {value.imageText}
                key={index} 
              />
            )
          }) 
        }
        </div>
      </div>
      <div className='sliderNavButtons'>
        <button onClick={() => moveSlide(false)}><img src={ leftArrow } alt="Previous image icon" /></button>
        <button onClick={() => moveSlide(true)}><img src={ rightArrow } alt="Next image icon" /></button>
      </div>
    </div>
  );
}

SliderWithText.propTypes = {
  content: PropTypes.object.isRequired
}

export { SliderWithText }