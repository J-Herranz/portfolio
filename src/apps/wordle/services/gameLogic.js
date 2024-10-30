import confetti from "canvas-confetti";


// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
//
function gridReset({ setGridContent }) {
  setGridContent(() => Array.from({ length: 6 }, () =>
    Array.from({ length: 5 }, () => ({ state: 0, innerValue: '' }))
  ))
}


// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
//
function resetBoard({ setAttempNb, setGridContent, setCurrentCell }) {
  setAttempNb(() => 0)
  setCurrentCell(() => 0)
  gridReset({ setGridContent })
}


// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
//
function wordleWordPicker({ dictionnary }) {
  if (dictionnary?.length > 0) {
    const randomIndex = Math.floor(Math.random() * dictionnary.length)
    console.log(`wordleWordPicker / nueva palabra : ${dictionnary[randomIndex]}`)
    return dictionnary[randomIndex]
  }
  return ''
}


// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
//
function handlePlayerInput_backspace({ setGridContent, attempNb, currentCell, setCurrentCell }) {

  setGridContent((prev) => {
    if (currentCell - 1 >= 0) {
      const currentGridAttempContent = JSON.parse(JSON.stringify(prev)); // deep copy creation

      const indexModifier = currentCell === 0 || (currentCell + 1 === currentGridAttempContent[attempNb].length && currentGridAttempContent[attempNb][currentCell].innerValue != '')
        ? 0 : -1

      currentGridAttempContent[attempNb][currentCell + indexModifier].innerValue = ''

      setCurrentCell((prev) => prev + indexModifier)
      return currentGridAttempContent
    }
    return prev
  })
}


// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
//
function wordErrorAnimation(attempNb) {
  const gridCellContainerDiv = document.getElementsByClassName('gridCell-container-div')[attempNb]

  // adding trembling class
  gridCellContainerDiv.classList.add('trembling')

  // taking out tembling class after 500ms
  setTimeout(() => {
    gridCellContainerDiv.classList.remove('trembling')
  }, 500)
}


// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
//
function showInfoMessage(message) {
  const messagePanel = document.getElementById('messagePanel');

  // Set to visible
  messagePanel.innerHTML = message
  messagePanel.style.visibility = 'visible';

  // Hidden again after 2sec  
  setTimeout(() => {
    messagePanel.style.visibility = 'hidden';
  }, 2000)
}

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
//
function characterInputAnimation(attempNb, currentCell) {
  const gridCellContainerDiv = document.getElementsByClassName('gridCell-container-div')[attempNb]
  const gridCell = gridCellContainerDiv.children[currentCell]

  // adding grow-animation class
  gridCell.classList.add('grow-animation');

  // taking out grow-animation class after 200ms
  setTimeout(() => {
    gridCell.classList.remove('grow-animation')
  }, 200)
}

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
//
function wordEvaluation({ targetWord, attempNb, prevGridContent }) {

  // Character array built with the player's input
  const gridCellContainerDiv = document.getElementsByClassName('gridCell-container-div')[attempNb];
  const guessedLetters = Array.from(gridCellContainerDiv.children).map(cell => cell.querySelector('p').innerText);

  // Character array built with the target word
  const targetWordArray = targetWord.split('');

  const guessedWordPositionStatus = new Array(guessedLetters.length).fill(0); // not in target word by default
  const letterCount = {}; // Contador de letras en la palabra objetivo

  // Contar las letras en la palabra objetivo
  for (const letter of targetWordArray) {
    letterCount[letter] = (letterCount[letter] || 0) + 1;
  }

  // 1. Letter in right position
  for (let i = 0; i < guessedLetters.length; i++) {
    if (guessedLetters[i] === targetWordArray[i]) {
      guessedWordPositionStatus[i] = 2; // letter in right position
      letterCount[guessedLetters[i]]--; // Reducir el conteo
    }
  }

  // 2. Letter present in the target word but in wrong position
  for (let i = 0; i < guessedLetters.length; i++) {
    // Skip already matched letters
    if (guessedWordPositionStatus[i] === 2) continue;

    const guessedLetter = guessedLetters[i];

    // Si la letra está en la palabra objetivo y todavía no ha alcanzado su conteo
    if (letterCount[guessedLetter] > 0) {
      guessedWordPositionStatus[i] = 1; // letter present but in wrong position
      letterCount[guessedLetter]--; // Disminuir el contador
    }
  }

  /*
  setGridContent((prev) => {
    const currentGridContent = JSON.parse(JSON.stringify(prev)); // deep copy creation
    for (let i = 0; i < guessedWordPositionStatus.length; i++) {
      currentGridContent[attempNb][i].state = guessedWordPositionStatus[i]
    }
    return currentGridContent
  })
  */

  const currentGridContent = JSON.parse(JSON.stringify(prevGridContent)); // deep copy creation
  for (let i = 0; i < guessedWordPositionStatus.length; i++) {
    currentGridContent[attempNb][i].state = guessedWordPositionStatus[i]
  }

  return currentGridContent;
}


// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
//
function handlePlayerInput_enter({ setGridContent, dictionnary, targetWord, attempNb, setAttempNb, t, setCurrentCell, setGameStart }) {
  setGridContent((prevGridContent) => {
    let playerWordAttemp = prevGridContent[attempNb].map((obj) => obj.innerValue).join('');

    // word longer than allowed
    if (playerWordAttemp.length > 5) return prevGridContent

    // forbidden word size (too short)
    if (playerWordAttemp.length < 5) {
      wordErrorAnimation(attempNb)
      showInfoMessage(t?.subAppInfo?.incorrectLengthMessage)
      return prevGridContent // Returns state with no changes
    }

    // word not present on word list
    if (!dictionnary.includes(playerWordAttemp.trim().toUpperCase())) {
      wordErrorAnimation(attempNb)
      showInfoMessage(t?.subAppInfo?.wordNotFoundMessage)
      return prevGridContent  // Returns state with no changes
    }

    // cell background color adapted to show correct guessed characters
    //const evaluationResult = wordEvaluation({ targetWord, attempNb, setGridContent })
    const evaluatedGrid = wordEvaluation({ targetWord, attempNb, prevGridContent })

    // player entered target word: victory
    if (playerWordAttemp === targetWord) {
      confetti()
      showInfoMessage(`${t?.subAppInfo?.victoryMessage} ${targetWord}`)
      setGameStart(() => false)
      return evaluatedGrid  // Returns state with no changes
    }

    // all attemps were used: defeat
    if (attempNb >= 5) {
      showInfoMessage(`${t?.subAppInfo?.defeatMessage} ${targetWord}`)
      setGameStart(() => false)
      return evaluatedGrid
    }

    // word length correct + word in list + target word not found + not defeated : new attemp
    setAttempNb((prev) => prev + 1)
    setCurrentCell(() => 0)
    return evaluatedGrid  // Returns state with no changes
  });
}


// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
//
function handlePlayerInput_characters({ setGridContent, letter, attempNb, currentCell, setCurrentCell }) {
  characterInputAnimation(attempNb, currentCell)
  setGridContent((prev) => {
    const newContent = JSON.parse(JSON.stringify(prev)) // deep copy creation
    newContent[attempNb][currentCell].innerValue = letter

    if (currentCell < 4) setCurrentCell((prev) => ++prev)
    return newContent;
  });
}


// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
//

export {
  gridReset,
  handlePlayerInput_backspace,
  handlePlayerInput_characters,
  handlePlayerInput_enter,
  resetBoard,
  wordleWordPicker
}