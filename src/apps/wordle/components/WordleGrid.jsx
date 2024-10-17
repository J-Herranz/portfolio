import { useState } from 'react'
import { SubAppTitle } from "../../../components/SubAppTitle";
import { GridCase } from "./GridCase";
import { VirtualKeyword } from './VirtualKeyword';
import PropTypes from 'prop-types';
import '../styles/wordleGrid.css'




function WordleGrid({ t, languageCode, darkmodeBool }) {

  const [tryNb, setTryNb] = useState(1)
  const [grid, setGrid] = useState(Array(6).fill(null).map(() => Array(5).fill('')));



  document.addEventListener('keydown', (event) => {
    const letter = event.key.toUpperCase(); // Convertir a mayúscula
    if (letter.match(/^[A-Z]$/)) { // Verificar si es una letra
      handleInput(letter);
    }
  });

  function handleInput(letter) {

  }

  return (
    <>
      <SubAppTitle appTitle={t?.subAppInfo?.appName} darkmodeBool={darkmodeBool} toolTipInfo={t?.subAppInfo?.toolTipInfo} />
      <div>

      </div>
      <div className="wordleGrid">
        {grid.map((row, i) => (
          row.map((letter, j) => (
            <GridCase key={`${i}-${j}`} letter={letter} />
          ))
        ))}
      </div>
      <button>{t?.subAppInfo?.newGame}</button>
      <VirtualKeyword t={t} languageCode={languageCode} darkmodeBool={darkmodeBool} />
    </>
  );
}

// Prop validation
WordleGrid.propTypes = {
  t: PropTypes.object.isRequired,
  languageCode: PropTypes.string.isRequired,
  darkmodeBool: PropTypes.bool.isRequired,
};

export { WordleGrid }