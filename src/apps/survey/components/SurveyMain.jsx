import { useContext } from 'react'
import { LanguageContext } from '../../../context/LanguageContext.js'
import { ThemeContext } from '../../../context/ThemeContext.js'
import '../styles/surveyMain.css'

function SurveyMain({ changeSurveyPage }) {
  const { t } = useContext(LanguageContext);
  const { darkmodeBool } = useContext(ThemeContext);

  return (

    <div className='surveyMainDiv'>
      <h1>{t?.survey?.mainPageTitle}</h1>
      <div className='surveyMainButtonDiv'>
        <button className='survey-button' onClick={() => changeSurveyPage('learn')}>{t?.survey?.prepareSurvey}</button>
        <button className='survey-button' onClick={() => changeSurveyPage('questions')}>{t?.survey?.startSurvey}</button>
      </div>
    </div>
  );
}

export { SurveyMain }