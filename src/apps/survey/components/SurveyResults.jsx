import { useContext } from 'react'
import { LanguageContext } from '../../../context/LanguageContext.js'
import { ThemeContext } from '../../../context/ThemeContext.js'
import '../styles/surveyResults.css'

function SurveyResults() {
  const { t } = useContext(LanguageContext);
  const { darkmodeBool } = useContext(ThemeContext);

  return (
    <p>survey results</p>
  );
}

export { SurveyResults }