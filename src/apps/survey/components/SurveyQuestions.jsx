import { useContext, useState, useEffect } from 'react'
import { SurveyOptionButton } from './SurveyOptionButton'
import { LanguageContext } from '../../../context/LanguageContext.js'
import { ThemeContext } from '../../../context/ThemeContext.js'
import { getSurveyInfo, getRandomSpecies } from '../resources/surveyLogic.js'
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
  /*
    useEffect(() => {
      setSurveyInfo(getSurveyInfo({ speciesObject: t?.survey?.species }))
    }, [t])
    */
  useEffect(() => {
    setSurveyResponseOptions(getRandomSpecies({ speciesCode: surveyInfo?.[questionNb]?.code }))
  }, [surveyInfo])

  useEffect(() => {
    setClues(shuffleClues())
  }, [surveyInfo, questionNb])


  useEffect(() => { setTotalPoints(0) }, [])

  //let clues = surveyInfo?.[questionNb]?.clues

  const returnToParent = ({ clickedSpecies }) => {
    if (surveyInfo[questionNb]?.code === clickedSpecies) {
      setTotalPoints(prev => prev + questionPoints)
      setRightAnswerFound(true)
    } else {
      setQuestionPoints(prev => {
        return prev - 1 < 0 ? 0 : prev - 1
      })
    }
  }

  const nextQuestionButtonHandler = () => {
    if (questionNb < 9) {
      setQuestionNb(prev => prev + 1)
      setSurveyResponseOptions(() => getRandomSpecies({ speciesCode: surveyInfo?.[questionNb + 1].code }))
      setRightAnswerFound(false)
      setQuestionPoints(3)
    } else {
      goToResults()
    }
  }

  function shuffleClues() {
    // Copia el array original para no modificar el array original
    const shuffledClues = [...surveyInfo?.[questionNb]?.clues];

    // Algoritmo de Fisher-Yates para mezclar el array
    for (let i = shuffledClues.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Indice aleatorio entre 0 y i
      [shuffledClues[i], shuffledClues[j]] = [shuffledClues[j], shuffledClues[i]]; // Intercambiar los elementos
    }

    return shuffledClues;
  };

  return (
    <>
      <div className='surveyQuestions-div'>
        <h2>{`${t?.survey?.question} (${questionNb + 1}/${surveyInfo.length})`}</h2>
        <div className='imageToGuess-clues-div'>
          <img src={surveyInfo?.[questionNb].imagePath} alt={`${surveyInfo?.[questionNb].name} image`} />
          {questionPoints < 3 ?
            <div className='clues-div'>
              <h2>{t?.survey?.clueTitle}</h2>
              {questionPoints < 3 && (


                // Usamos slice(0, 3 - questionPoints) para mostrar más pistas con menos puntos
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
        <div onClick={() => returnButtonFunc()} className='survey-button hoverLeft'>
          <img src={darkmodeBool ? quit_icon_black : quit_icon_white} />
          <p>{t?.survey?.quitSurvey}</p>
        </div>
        <div onClick={() => nextQuestionButtonHandler()} className={`survey-button hoverRight ${rightAnswerFound ? '' : 'disabled'}`}>
          <p>{t?.survey?.nextQuestion}</p>
          <img src={darkmodeBool ? next_icon_black : next_icon_white} />
        </div>
      </div >
      {/*<button onClick={() => {
        console.log('surveyInfo')
        console.log(surveyInfo)
        console.log('t.survey.species')
        console.log(t.survey.species)
      }}>print</button>*/}
    </>
  );
}

SurveyQuestions.propTypes = {
  returnButtonFunc: PropTypes.func.isRequired,
  goToResults: PropTypes.func.isRequired,
  setTotalPoints: PropTypes.func.isRequired,
}

export { SurveyQuestions }