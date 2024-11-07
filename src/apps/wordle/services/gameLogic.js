import confetti from "canvas-confetti";

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
/**
 * Animates the input of a character by enlarging the current cell.
 * 
 * @param {Object} params - Object containing all parameters
 * @param {number} params.attempNb - player's attempt number (Wordle row number)
 * @param {number} params.currentCell - current cell number in the Wordle grid row
 */
function characterInputAnimation({ attempNb, currentCell }) {
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
/**
 * Initializes Wordle's grid
 * 
 * @param {Object} params - Object containing all parameters
 * @param {function} params.setGridContent - setter for the Wordle state: gridContent 
 */
function gridReset({ setGridContent }) {
  setGridContent(() => Array.from({ length: 6 }, () =>
    Array.from({ length: 5 }, () => ({ state: 0, innerValue: '' }))
  ))
}


// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
/**
 * Handles player input when the Backspace key is pressed.
 * 
 * This function deletes the value in the current cell if it exists; otherwise, it removes the 
 * value from the previous cell.
 * 
 * @param {Object} params - Object containing all parameters
 * @param {function} params.setGridContent - setter for the Wordle state: gridContent
 * @param {number} params.attempNb - player's attempt number (Wordle row number)
 * @param {number} params.currentCell - current cell number in the Wordle grid row
 * @param {function} params.setCurrentCell - setter for the Wordle state: currentCell
 */
function handlePlayerInput_backspace({ setGridContent, attempNb, currentCell, setCurrentCell }) {

  setGridContent((prev) => {
    if (currentCell - 1 >= 0) {
      const currentGridAttempContent = JSON.parse(JSON.stringify(prev)); // deep copy creation

      // settting the index to be modify according to the text of the current cell
      const indexModifier = currentCell === 0 || (currentCell + 1 === currentGridAttempContent[attempNb].length && currentGridAttempContent[attempNb][currentCell].innerValue != '')
        ? 0 : -1

      currentGridAttempContent[attempNb][currentCell + indexModifier].innerValue = ''

      // setting the new current cell number after erasing the content of the last current cell 
      setCurrentCell((prev) => prev + indexModifier)
      return currentGridAttempContent
    }
    return prev
  })
}


// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
/**
 * Handles player input when a character (A-Z, including Ñ) is pressed.
 * 
 * This function inserts the character into the current cell of the Wordle grid.
 * 
 * @param {Object} params - Object containing all parameters
 * @param {function} params.setGridContent - setter for the Wordle state: gridContent
 * @param {string} params.letter - letter pressed by the player
 * @param {number} params.attempNb - player's attempt number (Wordle row number)
 * @param {number} params.currentCell - current cell number in the Wordle grid row
 * @param {function} params.setCurrentCell - setter for the Wordle state: currentCell
 */
function handlePlayerInput_characters({ setGridContent, letter, attempNb, currentCell, setCurrentCell }) {
  characterInputAnimation({ attempNb, currentCell })
  setGridContent((prev) => {
    const newContent = JSON.parse(JSON.stringify(prev)) // deep copy creation

    // adding the character to the current cell
    newContent[attempNb][currentCell].innerValue = letter

    // modifying the current cell number
    if (currentCell < 4) setCurrentCell((prev) => ++prev)
    return newContent;
  });
}


// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
/**
 * Handles player input when the Enter key is pressed.
 * 
 * This function checks if the entered word is valid (5 letters and included in the dictionary).
 * If the word is invalid, it displays a message and animation. When the word is valid, the function evaluates 
 * the status of each character in relation to the target word (correct position, wrong position, or not present),
 * reflecting these statuses on both the Wordle grid and the virtual keyboard. 
 * 
 * If the player guesses the word, a message and animation are displayed, and the game ends. 
 * If the player runs out of tries, a message is shown, and the game stops. 
 * If neither condition is met, a new attempt is initiated, allowing the player to enter a new guess on the Wordle grid.
 * 
 * @param {Object} params - Object containing all parameters
 * @param {function} params.setGridContent - setter for the Wordle state: gridContent
 * @param {Array<String>} params.dictionnary - array containing all 5-character words from the language for use in the game
 * @param {string} params.targetWord - word to be guessed in Wordle
 * @param {number} params.attempNb - player's attempt number (Wordle row number)
 * @param {function} params.setAttempNb - setter for the Wordle state: attempNb
 * @param {Array<Object>} params.t - array of objects containing all translations for the selected language in the game
 * @param {function} params.setCurrentCell - setter for the Wordle state: currentCell
 * @param {function} params.setGameStart - setter for the Wordle state: gameStart
 * @param {Array<Object>} params.alphabetArray - array containing key codes and statuses (not present, present but 
 * in the wrong position, and in the right position) for each virtual keyboard key
 */
function handlePlayerInput_enter({ setGridContent, dictionnary, targetWord, attempNb, setAttempNb, t, setCurrentCell, setGameStart, alphabetArray }) {
  setGridContent((prevGridContent) => {
    let playerWordAttemp = prevGridContent[attempNb].map((obj) => obj.innerValue).join('');

    // word longer than allowed
    if (playerWordAttemp.length > 5) return prevGridContent

    // forbidden word size (too short)
    if (playerWordAttemp.length < 5) {
      wordErrorAnimation({ attempNb })
      showInfoMessage({ message: t?.subAppInfo?.incorrectLengthMessage })
      return prevGridContent // Returns state with no changes
    }

    // word not present on word list
    if (!dictionnary.includes(playerWordAttemp.trim().toUpperCase())) {
      wordErrorAnimation({ attempNb })
      showInfoMessage({ message: t?.subAppInfo?.wordNotFoundMessage })
      return prevGridContent  // Returns state with no changes
    }

    // cell background color adapted to show correct guessed characters
    const evaluatedGrid = wordEvaluation({ targetWord, attempNb, prevGridContent })

    // set keyboard keys colours regarding its status (letter in wrong position, not present or in right position)
    setVirtualKeyboardKeyBackgroundColor({ alphabetArray, gridContent: evaluatedGrid })

    // player entered target word: victory
    if (playerWordAttemp === targetWord) {
      confetti()
      showInfoMessage({ message: `${t?.subAppInfo?.victoryMessage} ${targetWord}` })
      setGameStart(() => false)
      return evaluatedGrid  // Returns state with no changes
    }

    // all attemps were used: defeat
    if (attempNb >= 5) {
      showInfoMessage({ message: `${t?.subAppInfo?.defeatMessage} ${targetWord}` })
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
/**
 * Adds the error animation to the current attempt row by adding and removing the trembling class
 * 
 */
function inputBeforeGameStartAnimation() {
  const newGameButton = document.getElementsByClassName('newGame-button')[0]

  if (!newGameButton) return

  // adding flickering class
  newGameButton.classList.add('flickering')

  // taking out flickering class after 1000ms
  setTimeout(() => {
    newGameButton.classList.remove('flickering')
  }, 1000)
}


// -----------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------
/**
 * Constructs an array of objects to manage the status (background color style) of each key on the virtual keyboard
 * 
 * @param {Object} params - Object containing all parameters
 * @param {string} params.languageCode - string containing the languageCode 
 * @returns {Array<Object>} - array of objects containing all keyboard key values, each initialized with the status value 'key-notChecked'
 */
function resetAlphabetArray({ languageCode }) {
  const newAlphabetArray = [];

  // adding all keyboard letters and their initial states
  for (let charCode = 65; charCode <= 90; charCode++) {
    newAlphabetArray.push({
      letter: String.fromCharCode(charCode),
      state: 'key-notChecked'
    });
  }

  // if current language code is spanish, then adding Ñ letter to the array
  if (languageCode === 'es') newAlphabetArray.push({
    letter: String.fromCharCode(209),
    state: 'key-notChecked'
  })

  return newAlphabetArray
}


// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
/**
 * Resets the Wordle board by clearing the game board and setting both the player's attempt number 
 * and the current cell to zero
 * 
 * @param {Object} params - Object containing all parameters
 * @param {function} params.setAttempNb - setter for the Wordle state: attempNb
 * @param {function} params.setGridContent - setter for the Wordle state: gridContent
 * @param {function} params.setCurrentCell - setter for the Wordle state: currentCell
 */
function resetBoard({ setAttempNb, setGridContent, setCurrentCell }) {
  setAttempNb(() => 0)
  setCurrentCell(() => 0)
  gridReset({ setGridContent })
}


// -----------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------
/**
 * Updates the states of the virtual keyboard keys (not present, present but in the wrong position, in the right position, or 
 * not checked) based on the relationship between the player's input and the current word to guess
 * 
 * @param {Object} params - Object containing all parameters
 * @param {Array<Object>} params.alphabetArray - array of objects representing the letter and state of each key on the virtual keyboard
 * @param {Array<Object>} params.gridContent - array of objects representing the inner value and state of each cell on the Wordle game board
 * @returns {Array<Object>} - updated alphabetArray with the new states
 */
function setVirtualKeyboardKeyBackgroundColor({ alphabetArray, gridContent }) {
  const backgroundColorArray = [
    'key-wrongPosition',
    'key-rightPosition',
    'key-notPresent',
    'key-notChecked'
  ];

  const flattedArray = gridContent.flat();

  alphabetArray.forEach(alphabetArrayObject => {
    const filteredArray = flattedArray.filter(item => item.innerValue === alphabetArrayObject.letter);

    if (filteredArray.length > 0) {
      if (filteredArray.some(item => item.state === 2)) {
        alphabetArrayObject.state = backgroundColorArray[1] // key-rightPosition (green)
      }
      else if (filteredArray.some(item => item.state === 1)) {
        alphabetArrayObject.state = backgroundColorArray[0] // key-wrongPosition (yellow)
      }
      else {
        alphabetArrayObject.state = backgroundColorArray[2] // key-notPresent (red)
      }
    } else {
      alphabetArrayObject.state = backgroundColorArray[3]; // key-notChecked (black)
    }
  });
  return alphabetArray;
}


// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
/**
 * Shows a message to the player for 3 seconds
 * 
 * @param {Object} params - Object containing all parameters
 * @param {string} params.message - String containing the message content 
 */
function showInfoMessage({ message }) {
  const messagePanel = document.getElementById('messagePanel');

  const messageContent = message ? message : "Message not attributed"

  // Set to visible
  messagePanel.innerHTML = messageContent
  messagePanel.style.visibility = 'visible';

  // Hidden again after 2sec  
  setTimeout(() => {
    messagePanel.style.visibility = 'hidden';
  }, 3000)
}


// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
/**
 * Adds the error animation to the current attempt row by adding and removing the trembling class
 * 
 * @param {Object} params - Object containing all parameters
 * @param {number} params.attempNb - player's attempt number (Wordle row number)
 */
function wordErrorAnimation({ attempNb }) {
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
/**
 * Assigns the state (not present, present but in the wrong position, or in the right position) 
 * to each cell in the current attempt row of the Wordle grid
 * 
 * @param {Object} params - Object containing all parameters
 * @param {string} params.targetWord - word to guess
 * @param {number} params.attempNb - player's attempt number (Wordle row number)
 * @param {Array<Object>} params.prevGridContent - array of objects representing the inner value and state of each cell on the Wordle game board
 * @returns {Array<Object>} - updated gridContent
 */
function wordEvaluation({ targetWord, attempNb, prevGridContent }) {

  // Character array built with the player's input
  const gridCellContainerDiv = document.getElementsByClassName('gridCell-container-div')[attempNb];
  const guessedLetters = Array.from(gridCellContainerDiv.children).map(cell => cell.querySelector('p').innerText);

  // Character array built with the target word
  const targetWordArray = targetWord.split('');

  const guessedWordPositionStatus = new Array(guessedLetters.length).fill(0); // not in target word by default
  const letterCount = {}; // Contador de letras en la palabra objetivo

  // Counting the number of repetitions of each letter in the word to guess
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

    // If the letter is present in the target word and its count has not been reached
    if (letterCount[guessedLetter] > 0) {
      guessedWordPositionStatus[i] = 1; // letter present but in wrong position
      letterCount[guessedLetter]--; // Disminuir el contador
    }
  }

  const currentGridContent = JSON.parse(JSON.stringify(prevGridContent)); // deep copy creation
  for (let i = 0; i < guessedWordPositionStatus.length; i++) {
    currentGridContent[attempNb][i].state = guessedWordPositionStatus[i]
  }

  return currentGridContent;
}


// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
/**
 * Randomly selects a word from the current dictionary
 * 
 * @param {Object} params - Object containing all parameters
 * @param {Array<string>} params.dictionnary - array containing all 5-character words from the language for use in the game
 * @returns {string} - randomly chosen word for the Wordle game
 */
function wordleWordPicker({ dictionnary }) {
  if (dictionnary?.length > 0) {
    const randomIndex = Math.floor(Math.random() * dictionnary.length)
    console.log(`wordleWordPicker / targetword : ${dictionnary[randomIndex]}`) // Debug
    return dictionnary[randomIndex]
  }
  return ''
}


// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// Exports

export {
  gridReset,
  handlePlayerInput_backspace,
  handlePlayerInput_characters,
  handlePlayerInput_enter,
  inputBeforeGameStartAnimation,
  resetAlphabetArray,
  resetBoard,
  setVirtualKeyboardKeyBackgroundColor,
  wordleWordPicker
}