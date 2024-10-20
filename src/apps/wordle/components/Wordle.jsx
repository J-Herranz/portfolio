import { useState, useContext } from 'react'
import { SubAppTitle } from "../../../components/SubAppTitle";
import { GridCell } from "./GridCell";
import { VirtualKeyboard } from './VirtualKeyboard';
import { LanguageContext } from '../../../context/LanguageContext'
import { ThemeContext } from '../../../context/ThemeContext'
import PropTypes from 'prop-types';
import '../styles/wordle.css'

function Wordle() {

  const [tryNb, setTryNb] = useState(1)
  const [grid, setGrid] = useState(Array(6).fill(null).map(() => Array(5).fill({ innerValue: '', state: 0 })));
  const { t, languageCode } = useContext(LanguageContext)
  const { darkmodeBool } = useContext(ThemeContext)

  document.addEventListener('keydown', (event) => {
    const letter = event.key.toUpperCase(); // Convertir a mayúscula
    if (letter.match(/^[A-Z]$/)) { // Verificar si es una letra
      handleInput(letter);
    }
  });

  function handleInput(letter) {

  }


  function wordleWordPicker() {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  return (
    <>
      <SubAppTitle />
      <div>

      </div>
      <div className="wordleGrid">
        {grid.map((row, i) => (
          row.map((gridCellValue, j) => (
            <GridCell key={`${i}-${j}`} gridCellValue={gridCellValue} />
          ))
        ))}
      </div>
      <button>{t?.subAppInfo?.newGame}</button>
      {/*<VirtualKeyboard t={t} languageCode={languageCode} darkmodeBool={darkmodeBool} />*/}
      <VirtualKeyboard />
    </>
  );
}

// Prop validation
Wordle.propTypes = {
};

export { Wordle }