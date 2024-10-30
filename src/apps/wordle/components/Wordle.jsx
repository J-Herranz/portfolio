import { useState, useContext } from 'react'
import { useDictionnary } from '../hooks/useDictionnary.js';
import { useGrid } from '../hooks/useGrid.js';
import { useKeyboardInput } from '../hooks/useKeyboardInput.js';

import { SubAppTitle } from "../../../components/SubAppTitle";
import { GridRow } from "./GridRow";
import { VirtualKeyboard } from './VirtualKeyboard';
import { LanguageContext } from '../../../context/LanguageContext'
import { ThemeContext } from '../../../context/ThemeContext.js';

import { handlePlayerInput_backspace, handlePlayerInput_characters, handlePlayerInput_enter, resetBoard, wordleWordPicker } from '../services/gameLogic.js'

import PropTypes from 'prop-types';

import '../styles/wordle.css'

function Wordle() {

  const { t } = useContext(LanguageContext)
  const { darkmodeBool } = useContext(ThemeContext)
  const [targetWord, setTargetWord] = useState('')
  const [gameStart, setGameStart] = useState(false)

  const dictionnary = useDictionnary({ gameRestart });
  const { attempNb, setAttempNb, currentCell, setCurrentCell, gridContent, setGridContent } = useGrid({ dictionnary });

  function handlePlayerInput(letter) {
    if (gameStart) {
      if (letter.match(/^[A-ZÑ]$/)) {
        handlePlayerInput_characters({ setGridContent, letter, attempNb, currentCell, setCurrentCell })
      }

      if (letter === 'BACKSPACE') {
        handlePlayerInput_backspace({ setGridContent, attempNb, currentCell, setCurrentCell })
      }

      if (letter === 'ENTER') {
        handlePlayerInput_enter({ setGridContent, dictionnary, targetWord, attempNb, setAttempNb, t, setCurrentCell, setGameStart })
      }
    }
  }

  function gameRestart() {
    setTargetWord(() => '')
    setGameStart(() => false)
    resetBoard({ setAttempNb, setGridContent, setCurrentCell })
  }

  function handleNewGameClick(event) {
    event.target.blur() // taking out focus from NEW GAME button
    resetBoard({ setAttempNb, setGridContent, setCurrentCell })
    setTargetWord(() => wordleWordPicker({ dictionnary }))
    setGameStart(() => true)
  }

  useKeyboardInput(handlePlayerInput)

  return (
    <>
      <SubAppTitle />
      <p id="messagePanel" className={darkmodeBool ? 'messagePanel-dark' : 'messagePanel-light'} style={{ visibility: "hidden" }}></p>
      <div className="gridRow-container-div">
        {gridContent.map((value, index) => (
          <GridRow key={index} rowNumber={index} rowContent={value} />
        ))}
      </div>

      <button onClick={handleNewGameClick}>{t?.subAppInfo?.newGame}</button>

      <VirtualKeyboard />
    </>
  );
}

// Prop validation
Wordle.propTypes = {
};

export { Wordle }