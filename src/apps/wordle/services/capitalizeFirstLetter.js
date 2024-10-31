// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
/**
 * Capitalize the first letter of a string
 * 
 * @param {Object} params - Object containing all parameters
 * @param {string} params.string - string to be treated
 * @returns {string} - string with its first letter capitalized
 */

function capitalizeFirstLetter({ string }) {
  if (!string) return '';
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export { capitalizeFirstLetter }