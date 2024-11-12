import { useState } from 'react'
import { SurveyLearn } from '../components/SurveyLearn'
import { SurveyMain } from '../components/SurveyMain'
import { SurveyQuestions } from '../components/SurveyQuestions'
import { SurveyResults } from '../components/SurveyResults'

function useSurvey() {
  /*
  
    const changeSurveyPage = (pageName) => {
      //console.log('click on changeSurveyPage')
      setPage(pageName)
      //console.log(pageName)
    }
  
    const renderSurveyPage = () => {
      switch (page) {
        case 'learn':
          return <SurveyLearn />
        case 'questions':
          return <SurveyQuestions />
        case 'results':
          return <SurveyResults />
        default:
          return <SurveyMain />
      }
    }
  
    return { changeSurveyPage, renderSurveyPage }*/
}

export { useSurvey }