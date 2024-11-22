import { useContext, useEffect } from 'react'
import { ThemeContext } from '../../../context/ThemeContext.js'
import '../styles/surveyInfoCard.css'
import DOMPurify from 'dompurify'
import PropTypes from 'prop-types'

function SurveyInfoCard({ cardInfo, speciesEnglishName, setIsSpotDifferencesImgVisible }) {
  const { darkmodeBool } = useContext(ThemeContext);

  const imageSrc = `/assets/survey_images/species_photos/${speciesEnglishName}/${speciesEnglishName}1.jpg`

  const sanitizedHTML = DOMPurify.sanitize(cardInfo?.info);

  useEffect(() => {
    // Selects all elements with species-spot-pattern class inside a element with surveyInfoCard-div class
    const clickableSpans = document.querySelectorAll('.surveyInfoCard-div .species-spot-pattern');

    // Adds a onClick event to each one
    clickableSpans.forEach((span) => {
      span.addEventListener('click', handleSpanClick);
    });

    // Cleanup to remove the event when the component is dismounted
    return () => {
      clickableSpans.forEach((span) => {
        span.removeEventListener('click', handleSpanClick);
      });
    };
  }, [sanitizedHTML]);

  const handleSpanClick = () => {
    setIsSpotDifferencesImgVisible(true);
  };

  return (
    <div id="surveyInfoCard" className='surveyInfoCard-div'>
      <div>
        <h2 className={darkmodeBool ? 'surveyInfoCard-h2-black' : 'surveyInfoCard-h2-white'}>{cardInfo?.binomialNomenclature}</h2>
        {imageSrc ? <img src={imageSrc} alt={`${speciesEnglishName} image`} /> : <p>Image not found</p>}
        <p dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
      </div>
    </div>
  );
}

SurveyInfoCard.propTypes = {
  cardInfo: PropTypes.object.isRequired,
  speciesEnglishName: PropTypes.string.isRequired,
  setIsSpotDifferencesImgVisible: PropTypes.func.isRequired,
}

export { SurveyInfoCard }