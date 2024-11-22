import { useState, useEffect, useContext } from 'react'
import { SPECIES_NAME_BY_LANGUAGE } from "../resources/constants"
import { ThemeContext } from '../../../context/ThemeContext.js'
import PropTypes from 'prop-types'
import "../styles/surveyOptionButton.css"

function SurveyOptionButton({ returnToParent, species, languageCode, rightAnswer }) {
  const [clicked, setClicked] = useState(false)
  const { darkmodeBool } = useContext(ThemeContext)

  const classSelector = () => {
    if (clicked) {
      const lightOrDark = darkmodeBool ? '-light' : '-dark'
      return species?.speciesName === rightAnswer
        ? `button-correct${lightOrDark}`
        : `button-incorrect${lightOrDark}`
    }
    return ''
  }

  useEffect(() => {
    setClicked(false)
  }, [species])

  return (
    <div className={`optionDiv ${classSelector()}`}
      onClick={() => {
        setClicked(true)
        returnToParent({
          clickedSpecies: species
        })
      }
      }>
      {SPECIES_NAME_BY_LANGUAGE[species?.speciesName]?.[languageCode]}
    </div >
  );
}

SurveyOptionButton.propTypes = {
  returnToParent: PropTypes.func.isRequired,
  species: PropTypes.object.isRequired,
  languageCode: PropTypes.string.isRequired,
  rightAnswer: PropTypes.string.isRequired,
}

export { SurveyOptionButton }