import { useContext } from 'react'
import { useKeyboardInput } from '../hooks/useKeyboardInput.js'

import { SubAppTitle } from "../../../components/SubAppTitle"
import { GridRow } from "./GridRow"
import { VirtualKeyboard } from './VirtualKeyboard'
import { ThemeContext } from '../../../context/ThemeContext.js'
import { useWordle } from '../hooks/useWordle.js'

import PropTypes from 'prop-types';

import '../styles/wordle.css'

function Wordle() {
  const { darkmodeBool } = useContext(ThemeContext)
  const { alphabetArray, handlePlayerInput, handleNewGameClick, gridContent, t } = useWordle();

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
      <button className='newGame-button' onClick={handleNewGameClick}>{t?.subAppInfo?.newGame}</button>

      <VirtualKeyboard alphabetArray={alphabetArray} />
    </>
  );
}

// Prop validation
Wordle.propTypes = {
};

export { Wordle }