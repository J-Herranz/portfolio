import { useContext, useState } from 'react'
import { ThemeContext } from '../../../context/ThemeContext.js'
import { SubAppTitle } from "../../../components/SubAppTitle"
import { LanguageContext } from '../../../context/LanguageContext.js'
import '../styles/survey.css'

import { SurveyLearn } from '../components/SurveyLearn'
import { SurveyMain } from '../components/SurveyMain'
import { SurveyQuestions } from '../components/SurveyQuestions'
import { SurveyResults } from '../components/SurveyResults'

function Survey() {
  const { t, languageCode } = useContext(LanguageContext);
  const { darkmodeBool } = useContext(ThemeContext);
  const [page, setPage] = useState('main')
  const [totalPoints, setTotalPoints] = useState(0)

  const changeSurveyPage = (pageName) => {
    //console.log('click on changeSurveyPage')
    setPage(pageName)
    //console.log(pageName)
  }

  const renderSurveyPage = () => {
    switch (page) {
      case 'learn':
        return <SurveyLearn returnButtonFunc={() => setPage('main')} />
      case 'questions':
        return <SurveyQuestions key={languageCode} returnButtonFunc={() => setPage('main')} goToResults={() => setPage('results')} setTotalPoints={setTotalPoints} />
      case 'results':
        return <SurveyResults returnButtonFunc={() => setPage('main')} totalPoints={totalPoints} />
      default:
        return <SurveyMain changeSurveyPage={changeSurveyPage} />
    }
  }

  return (
    <>
      <SubAppTitle />
      {renderSurveyPage()}
    </>
  );
}

export { Survey }