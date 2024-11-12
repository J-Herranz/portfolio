import { useContext } from 'react'
import { LanguageContext } from '../../../context/LanguageContext.js'
import { ThemeContext } from '../../../context/ThemeContext.js'
import '../styles/surveyQuestions.css'

function SurveyQuestions() {
  const { t } = useContext(LanguageContext);
  const { darkmodeBool } = useContext(ThemeContext);

  return (
    <p>survey questions</p>
  );
}

export { SurveyQuestions }