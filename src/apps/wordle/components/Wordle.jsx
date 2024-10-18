import { useState } from 'react'
import { SubAppTitle } from "../../../components/SubAppTitle";
import { GridCell } from "./GridCell";
import { VirtualKeyboard } from './VirtualKeyboard';
import PropTypes from 'prop-types';
import '../styles/wordle.css'

function Wordle({ t, languageCode, darkmodeBool }) {

  const [tryNb, setTryNb] = useState(1)
  const [grid, setGrid] = useState(Array(6).fill(null).map(() => Array(5).fill({ innerValue: '', state: 0 })));

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
      <SubAppTitle appTitle={t?.subAppInfo?.appName} darkmodeBool={darkmodeBool} toolTipInfo={t?.subAppInfo?.toolTipInfo} />
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
      <VirtualKeyboard t={t} languageCode={languageCode} darkmodeBool={darkmodeBool} />
    </>
  );
}

// Prop validation
Wordle.propTypes = {
  t: PropTypes.object.isRequired,
  languageCode: PropTypes.string.isRequired,
  darkmodeBool: PropTypes.bool.isRequired,
};

export { Wordle }