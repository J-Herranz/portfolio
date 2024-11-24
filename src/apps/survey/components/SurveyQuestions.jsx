import { useContext, useState, useEffect } from 'react'
import { SurveyOptionButton } from './SurveyOptionButton'
import { LanguageContext } from '../../../context/LanguageContext.js'
import { ThemeContext } from '../../../context/ThemeContext.js'
import { getSurveyInfo, getRandomSpecies, shuffleClues } from '../resources/surveyLogic.js'
import PropTypes from 'prop-types'
import quit_icon_black from '/assets/app-icons/quit_black.png'
import quit_icon_white from '/assets/app-icons/quit_white.png'
import next_icon_black from '/assets/app-icons/next_black.png'
import next_icon_white from '/assets/app-icons/next_white.png'
import '../styles/surveyQuestions.css'

function SurveyQuestions({ returnButtonFunc, goToResults, setTotalPoints }) {
  const { t, languageCode } = useContext(LanguageContext)
  const { darkmodeBool } = useContext(ThemeContext)

  const [questionNb, setQuestionNb] = useState(0)
  const [surveyInfo, setSurveyInfo] = useState(getSurveyInfo({ speciesObject: t?.survey?.species }))
  const [surveyResponseOptions, setSurveyResponseOptions] = useState(getRandomSpecies({ speciesCode: surveyInfo?.[questionNb]?.code }))
  const [rightAnswerFound, setRightAnswerFound] = useState(false)
  const [questionPoints, setQuestionPoints] = useState(3)
  const [clues, setClues] = useState()
  const [showMessage, setShowMessage] = useState(false)
  const [buttonTremble, setButtonTremble] = useState(false)
  const [fadeout, setFadeout] = useState(false)

  // initializes or affects the survey info state if the user changed the language
  useEffect(() => {
    if (t) {
      const newSurveyInfo = surveyInfo.map((speciesInfo) => {
        return {
          index: speciesInfo?.index,
          imagePath: speciesInfo?.imagePath,
          code: speciesInfo.code,
          ...t?.survey?.species[speciesInfo.code]
        }
      })
      setSurveyInfo(newSurveyInfo)
    } else {
      setSurveyInfo(getSurveyInfo({ speciesObject: t?.survey?.species }))
    }
  }, [t])

  // shuffles the clues every time we change the surveyInfo (new questionnaire or language change) or when the user changes the question number
  useEffect(() => {
    setClues(shuffleClues({ cluesArray: surveyInfo?.[questionNb]?.clues }))
  }, [surveyInfo, questionNb])

  // affects the total points to zero every time a new survey starts
  useEffect(() => { setTotalPoints(0) }, [])

  const returnToParent = ({ clickedSpecies }) => {
    if (surveyInfo[questionNb]?.code === clickedSpecies?.speciesName) {
      setTotalPoints(prev => prev + questionPoints)
      setRightAnswerFound(true)
    } else {
      setQuestionPoints(prev => {
        return prev - 1 < 0 ? 0 : prev - 1
      })
    }
  }

  const nextQuestionButtonHandler = () => {
    if (!rightAnswerFound) {
      setShowMessage(true);
      setButtonTremble(true)

      setTimeout(() => {
        setButtonTremble(false)
      }, 200);

      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
      return
    }

    if (questionNb < 9) {
      // start of the fade-out animation
      setFadeout(true);

      // waiting the fade-out to end to pass to the next question
      setTimeout(() => {
        setQuestionNb((prev) => prev + 1)
        setSurveyResponseOptions(() => getRandomSpecies({ speciesCode: surveyInfo?.[questionNb + 1].code }))
        setRightAnswerFound(false)
        setQuestionPoints(3)

        // ending fadeout (starting fade-in)
        setFadeout(false);
      }, 500)
    } else {
      goToResults()
    }
  }

  return (
    <>
      <div className='surveyQuestions-message-div' style={{ display: showMessage ? 'block' : 'none' }}>
        <p>{t?.survey?.noAnswerMessage}</p>
      </div>
      <h2>{`${t?.survey?.question} (${questionNb + 1}/${surveyInfo.length})`}</h2>
      <div className={`surveyQuestions-div ${fadeout ? 'opacityZero' : ''}`}>
        <div className='imageToGuess-clues-div'>
          <img src={surveyInfo?.[questionNb].imagePath} alt={`${surveyInfo?.[questionNb].name} image`} />
          {questionPoints < 3 ?
            <div className={`clues-div darkmode-ignore ${darkmodeBool ? 'clues-div-light' : 'clues-div-dark'}`}>
              <h2>{t?.survey?.clueTitle}</h2>
              {questionPoints < 3 && (
                clues.slice(0, 3 - questionPoints).map((clue, index) => (
                  <p key={`clue${questionNb}${index}`}>{clue}</p>
                ))
              )}
            </div> :
            ''
          }
        </div>
        <div className='optionsDiv-container' style={rightAnswerFound ? { pointerEvents: 'none' } : {}}>
          {
            surveyResponseOptions.map((species, index) => (
              < SurveyOptionButton
                key={`${questionNb}${index}`}
                returnToParent={returnToParent}
                species={species}
                languageCode={languageCode}
                rightAnswer={surveyInfo[questionNb]?.code}
              />
            ))
          }
        </div>
      </div>

      <div className='surveyQuestionsButtons-div'>
        <div onClick={() => returnButtonFunc()} className={`survey-button darkmode-ignore hoverLeft ${darkmodeBool ? 'surveyQuestionsButtons-light' : ''}`}>
          <img src={darkmodeBool ? quit_icon_black : quit_icon_white} />
          <p>{t?.survey?.quitSurvey}</p>
        </div>
        <div onClick={() => nextQuestionButtonHandler()}
          className={`survey-button darkmode-ignore hoverRight ${rightAnswerFound ? '' : 'disabled'} ${darkmodeBool ? 'surveyQuestionsButtons-light' : ''} ${buttonTremble ? 'tremble' : ''}`
          }>
          <p>{t?.survey?.nextQuestion}</p>
          <img src={darkmodeBool ? next_icon_black : next_icon_white} />
        </div>
      </div >
    </>
  );
}

SurveyQuestions.propTypes = {
  returnButtonFunc: PropTypes.func.isRequired,
  goToResults: PropTypes.func.isRequired,
  setTotalPoints: PropTypes.func.isRequired,
}

export { SurveyQuestions }