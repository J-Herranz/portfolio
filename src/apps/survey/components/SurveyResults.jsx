import { useContext } from 'react'
import { LanguageContext } from '../../../context/LanguageContext.js'
import { ThemeContext } from '../../../context/ThemeContext.js'
import PropTypes from 'prop-types'
import '../styles/surveyResults.css'

function SurveyResults({ returnButtonFunc, totalPoints }) {
  const { t } = useContext(LanguageContext);
  const { darkmodeBool } = useContext(ThemeContext);

  return (
    <>

      <p>survey results</p>
      <p>{`Total points: ${totalPoints}}`}</p>
      <button onClick={() => returnButtonFunc()}>{t?.survey?.backToSurveyMain}</button>
    </>
  );
}

SurveyResults.propTypes = {
  returnButtonFunc: PropTypes.func.isRequired,
  totalPoints: PropTypes.number.isRequired,
}

export { SurveyResults }