import { checkImagesExist } from '../services/checkImagesExist'

/**
 * Checks if the image has more than one available view for the current slide.
 * It iterates over the available views for the current slide and counts the number of views.
 * If more than one view is available, it returns true.
 *
 * @param {Object} params - The parameters for the function.
 * @param {Object} params.imageViewTypes - An object containing the available image views.
 * @param {number} params.currentSlideIndex - The index of the current slide.
 * @returns {boolean} - Returns true if more than one view is available, otherwise false.
 */
function checkIfImageHasMultipleViews ({ imageViewTypes, currentSlideIndex }) {
  let obj = imageViewTypes?.[currentSlideIndex]
  let nbOfAvailableViews = 0

  if (obj) {
    for (let key in obj) {
      if(key === 'url') continue
      nbOfAvailableViews += obj[key] ? 1 : 0
    }
  }
  return nbOfAvailableViews > 1
}

/**
 * Asynchronously fetches the image results for the given image URL, suffixes, and format.
 * It checks if the images exist using the `checkImagesExist` function, then updates
 * the image view status and types accordingly.
 *
 * @param {Object} params - The parameters for the function.
 * @param {string} params.imageUrl - The URL of the image to check.
 * @param {Array} params.imageSuffixes - A list of suffixes to check for the image.
 * @param {string} params.imageFormat - The format of the image (e.g., jpeg, png).
 * @param {Function} params.setImageViewStatus - A function to update the image view status.
 * @param {Function} params.setImageViewTypes - A function to update the image view types.
 * @param {number} params.slideIndex - The index of the current slide.
 */
async function getImageResults ({ imageUrl, imageSuffixes, imageFormat, setImageViewStatus, setImageViewTypes, slideIndex }) {
  const [imgResult] = await checkImagesExist({
    urls: [imageUrl],
    imageSuffixes: imageSuffixes,
    imgFormat: imageFormat,
  });

  setImageViewStatus(imgResult);

  setImageViewTypes(imageViewTypes => {
    if(imageViewTypes){
      const updatedImageViewTypes = [...imageViewTypes];  // Create a copy of the current array
      updatedImageViewTypes[slideIndex] = imgResult;  // Assign the result in the correct position
      return updatedImageViewTypes;  // Return the new version of the array
    }
  });
};

/**
 * Determines which image to show based on the available image view status and the requested suffix.
 * It checks if the requested suffix is available, and if so, returns the corresponding image URL.
 * If not, it looks for any available suffix and returns the corresponding image.
 *
 * @param {Object} params - The parameters for the function.
 * @param {string} params.imageUrl - The base URL of the image.
 * @param {Array} params.imageSuffixes - A list of suffixes to check for the image.
 * @param {string} params.imageFormat - The format of the image (e.g., jpeg, png).
 * @param {Object} params.imageViewStatus - An object representing the available image views.
 * @param {number} params.viewNb - The index of the requested view.
 * @returns {string} - The image URL with the appropriate suffix or an empty string if no image is found.
 */
function imageToShow ({ imageUrl, imageSuffixes, imageFormat, imageViewStatus, viewNb }) {
if (!imageViewStatus) {
  return ''; // Return an empty string if we don't have the image status yet
}

// Check the requested suffix from viewNb
const suffix = imageSuffixes?.[viewNb];

// Check if the image with the specific suffix is available in imageViewStatus
if (suffix && imageViewStatus[suffix]) {
  return `${imageUrl}_${suffix}.${imageFormat}`;
}

// If the image with the specific suffix is not found, look for another available suffix
const availableSuffix = Object.keys(imageViewStatus).find(key => imageViewStatus[key] === true);

// If we find an available suffix, use it
if (availableSuffix) {
  return `${imageUrl}_${availableSuffix}.${imageFormat}`;
}
return ''; // If no image is found
};

export { checkIfImageHasMultipleViews, getImageResults, imageToShow }