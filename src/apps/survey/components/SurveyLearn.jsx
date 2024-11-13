import { useContext } from 'react'
import { LanguageContext } from '../../../context/LanguageContext.js'
import { ThemeContext } from '../../../context/ThemeContext.js'
import '../styles/surveyLearn.css'
import { PhylogeneticTree } from './PhylogeneticTree.jsx'

function SurveyLearn() {
  const { t } = useContext(LanguageContext);
  const { darkmodeBool } = useContext(ThemeContext);

  return (
    <>
      <PhylogeneticTree />

    </>
  );
}

export { SurveyLearn }