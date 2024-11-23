import { useContext, useState } from 'react'
import { LanguageContext } from '../../../context/LanguageContext.js'
import { ThemeContext } from '../../../context/ThemeContext.js'
import PropTypes from 'prop-types'
import DOMPurify from 'dompurify'
import '../styles/surveyResults.css'

function SurveyResults({ returnButtonFunc, totalPoints }) {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useContext(LanguageContext);
  const { darkmodeBool } = useContext(ThemeContext);

  const scoringGuide = totalPoints < 15 ? t?.survey?.resultsMessage?.bad :
    totalPoints < 30 ? t?.survey?.resultsMessage?.medium :
      t?.survey?.resultsMessage?.good

  const sanitizedHTML = DOMPurify.sanitize(t?.survey.scoreExplanation)

  let srcLocation = darkmodeBool ? "/assets/app-icons/info23_black.png" : "/assets/app-icons/info23_white.png"


  console.log(t)
  return (
    <>
      <div className='surveyResults-toolTip-div'
        onClick={() => setIsVisible(!isVisible)}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}>
        <h1>{t?.survey.results}</h1>

        <img src={srcLocation} alt="Info Icon" />
        <p style={{ display: isVisible ? "block" : "none" }} dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
      </div>
      <div className='surveyResults-mainDiv'>
        <div className='surveyResults-resultsDiv'>
          <p style={{ color: darkmodeBool ? 'black' : 'white' }} className={darkmodeBool ? 'black-partial-border' : 'white-partial-border'}>{t?.survey?.resultsScore1} <strong>{totalPoints}</strong> {t?.survey?.resultsScore2}</p>
          <p>{scoringGuide}</p>
        </div>
      </div>
      <button onClick={() => returnButtonFunc()} className='surveyResults-button survey-button'>{t?.survey?.backToSurveyMain}</button>
    </>
  );
}

SurveyResults.propTypes = {
  returnButtonFunc: PropTypes.func.isRequired,
  totalPoints: PropTypes.number.isRequired,
}

export { SurveyResults }