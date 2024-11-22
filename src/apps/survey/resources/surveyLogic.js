import { SPECIES_NAME_BY_LANGUAGE } from "./constants"

/**
 * Retrieves an array with the species name passed as a parameter, and three other randomly chosen species 
 * from the species array, with random positions.
 * 
 * @param {Object} params - Object containing all parameters
 * @param {string} params.binomialNomenclature - The binomial nomenclature of the species passed as a parameter
 * @returns {Array<string>} - An array with 4 species names, including the one passed as a parameter
 */
function getRandomSpecies({ speciesCode }) {
  // ensure the species name exists in the speciesArray
  if (!Object.keys(SPECIES_NAME_BY_LANGUAGE).includes(speciesCode)) {
    console.error(`The species code ${speciesCode} is not found in the array.`);
    return [];
  }

  // create a copy of the array to avoid modifying the original
  const speciesCopy = [...Object.keys(SPECIES_NAME_BY_LANGUAGE)];

  // remove the passed species name from the array to avoid selecting it again
  const speciesIndex = speciesCopy.indexOf(speciesCode);
  if (speciesIndex !== -1) {
    speciesCopy.splice(speciesIndex, 1); // remove the species from the copy
  }

  // randomly select 3 species from the remaining species
  const randomSpecies = [];
  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * speciesCopy.length); // random index
    randomSpecies.push(speciesCopy[randomIndex]); // add the selected species to the result array
    speciesCopy.splice(randomIndex, 1); // remove the selected species to avoid duplicates
  }

  // combine the passed species name with the 3 randomly selected species
  const chosenSpeciesArray = [speciesCode, ...randomSpecies];

  // create an array with the original positions of the elements
  const chosenSpeciesArrayWithPosition = chosenSpeciesArray.map((speciesName, index) => ({ originalPosition: index, speciesName }));

  // perform the shuffle on the original array (Fisher-Yates algorithm or Knuth shuffle)
  for (let i = chosenSpeciesArrayWithPosition.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [chosenSpeciesArrayWithPosition[i], chosenSpeciesArrayWithPosition[j]] = [chosenSpeciesArrayWithPosition[j], chosenSpeciesArrayWithPosition[i]]; // swap elements
  }

  // return an array of objects with the original position and species
  return chosenSpeciesArrayWithPosition;
}


// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
/**
 * Selects a number of randomly selected species picked from the SPECIES_NAME_BY_LANGUAGE constant
 * 
 * @param {Object} params - Object containing all parameters
 * @param {number} params.speciesNb - number of species to be selected (default is 10)
 * @returns {Array<string>} - array containing randomly selected species names
 */
function getSpeciesAtRandom({ speciesNb = 10 }) {
  const copiedArray = [...Object.keys(SPECIES_NAME_BY_LANGUAGE)];  // copy the array to avoid modifying the original
  const result = [];

  // make sure that we do not select more items than those present on the array
  const numberOfItemsToSelect = Math.min(speciesNb, copiedArray.length);

  // select randomly until the required number of elements is reached
  for (let i = 0; i < numberOfItemsToSelect; i++) {
    const randomIndex = Math.floor(Math.random() * copiedArray.length);
    // extract the element at the random index and add it to the result array
    result.push(copiedArray[randomIndex]);
    // remove the selected element from the copied array to avoid duplicates
    copiedArray.splice(randomIndex, 1);
  }

  return result;
}


// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
/**
 * Gets the info required to build the survey (images + info)
 * 
 * @param {Object} params - Object containing all parameters
 * @param {number} params.speciesObject - the species object containing detailed species info
 * @param {number} params.speciesNb - number of species to be selected (default is 10)
 * @returns {Array<string>} - array containing the selected species objects
 */
function getSurveyInfo({ speciesObject, speciesNb = 10 }) {
  // validate speciesObject (ensure it is an object)
  if (!speciesObject || typeof speciesObject !== 'object') {
    console.error("Species object has not valable info");
    return [] // Return an empty array if speciesObject is invalid
  }

  // get random species names
  const selectedSpeciesNames = getSpeciesAtRandom({ speciesNb });

  let indexPosition = 0

  // map species names to their corresponding objects from speciesObject
  return selectedSpeciesNames
    .map(name => {
      const species = { ...speciesObject[name], code: name };  // get the species object
      if (species) {
        // generate a random number between 1 and 5
        const randomImageNumber = Math.floor(Math.random() * 5) + 1;
        // build the image path
        const imagePath = `/assets/survey_images/species_photos/${name}/${name}${randomImageNumber}.jpg`;

        // add the image path to the species object
        return {
          index: ++indexPosition,
          ...species,  // spread the existing species object properties
          imagePath: imagePath  // add the image path
        };
      }
      return null;  // if species not found, return null
    })
    .filter(speciesObject => speciesObject !== undefined);  // filter out any undefined values (in case the name doesn't exist)
}


function shuffleClues({ cluesArray }) {
  // copies the array passed as a parameter to avoid undesired modifications
  const shuffledClues = [...cluesArray];

  // Fisher-Yates algorithm to shuffle the array
  for (let i = shuffledClues.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Indice aleatorio entre 0 y i
    [shuffledClues[i], shuffledClues[j]] = [shuffledClues[j], shuffledClues[i]]; // Intercambiar los elementos
  }

  return shuffledClues;
};

export { getSurveyInfo, getRandomSpecies, shuffleClues }