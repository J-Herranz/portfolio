import { useState, useEffect } from 'react';

function useSliderNavigation({ totalSlides, mobileView }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);

  // Function that manages the current slide index
  const moveSlide = (moveRight) => {
    let nextIndex;
    if (moveRight) {
      nextIndex = (currentSlideIndex + 1) % totalSlides; // move to next slide
    } else {
      nextIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides; // move to the previous slide
    }
    setCurrentSlideIndex(() => nextIndex); // update the current slide index
  };

  // Function that sets the current slide width
  function updateSlideWidth() {
    const slides = document.querySelectorAll('.slideContainerDiv');
    if (slides.length > 0) {
      setSlideWidth(slides[0].offsetWidth);
    }
  }

  // -------------------------------------------------------------------------------------------------------------------
  // -------------------------------------------------------------------------------------------------------------------
  // Slide navigation

  // Hook that changes the slider position regarding the current slide index
  useEffect(() => {
    const slider = document.querySelector('.slider');
    if (slider && slideWidth > 0) {
      slider.style.transform = `translateX(-${currentSlideIndex * slideWidth * 2}px)`; // changes the slider position
    }
  }, [currentSlideIndex]); // executed every time the current slide index changes


  // -------------------------------------------------------------------------------------------------------------------
  // -------------------------------------------------------------------------------------------------------------------
  // Correction of slide position when resizing window

  // Hook that initialize the slide width and adds a subscription to the resize event of the DOM to reset the slide width
  useEffect(() => {
    updateSlideWidth(); // initialize the slide width

    window.addEventListener('resize', updateSlideWidth); // updates the slide size when resizing the window size
    return () => window.removeEventListener('resize', updateSlideWidth); // removes the listener when unmounting
  }, []);
  useEffect(() => {
    updateSlideWidth(); // initialize the slide width
    console.log('pepe')
    console.log(slideWidth)
    window.addEventListener('resize', updateSlideWidth); // updates the slide size when resizing the window size
    return () => window.removeEventListener('resize', updateSlideWidth); // removes the listener when unmounting
  }, [mobileView]);

  // Hook that changes the slider position when resizing the window
  useEffect(() => {
    const slider = document.querySelector('.slider');
    if (slider && slideWidth > 0) {
      // temporarily deactivating the transition to correct slide position when resizing window
      slider.style.transition = 'none';  
      slider.style.transform = `translateX(-${currentSlideIndex * slideWidth * 2}px)`; // adjusting position

      // reactivating the transition after a small delay for a smooth movement
      setTimeout(() => {
        slider.style.transition = 'transform 0.5s ease-in-out'; // activating transition again
      }, 10);
    }
  }, [slideWidth, mobileView]); // executed every time the slide width is changed

  return [ currentSlideIndex, moveSlide ];
}

export { useSliderNavigation };