import { useContext } from 'react'
import { LanguageContext } from '../../../context/LanguageContext.js'
import { ThemeContext } from '../../../context/ThemeContext.js'
import { getSurveyInfo, getRandomSpecies } from '../resources/surveyLogic.js'
import PropTypes from 'prop-types'
import '../styles/surveyQuestions.css'

function SurveyQuestions({ returnButtonFunc }) {
  const { t } = useContext(LanguageContext);
  const { darkmodeBool } = useContext(ThemeContext);

  const surveyInfo = getSurveyInfo({ speciesObject: t?.survey?.species })
  console.log(surveyInfo)
  const surveyResponseOptions = getRandomSpecies(surveyInfo?.[0].name)
  console.log(surveyResponseOptions)

  return (
    <>
      <img src={surveyInfo?.[0].imagePath} alt={`${surveyInfo?.[0].name} image`} />

      <div className='surveyQuestions-div'>
        <button onClick={() => returnButtonFunc()}>{t?.survey?.quitSurvey}</button>
        <button onClick={() => returnButtonFunc()}>{t?.survey?.nextQuestion}</button>
      </div>
    </>
  );
}

SurveyQuestions.propTypes = {
  returnButtonFunc: PropTypes.func.isRequired,
}


export { SurveyQuestions }