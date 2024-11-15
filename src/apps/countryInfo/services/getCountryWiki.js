import { COUNTRY_WIKI_URL_PREFIX } from "./constants";

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
/**
 * Gets the country info from the endpoint affected to the constant COUNTRY_WIKI_URL_PREFIX
 * 
 * @param {Object} params - Object containing all parameters
 * @param {string} params.countryName - string containing the country name
 * @param {string} params.languageCode - string containing the language code
 * @returns {Object} - object containing the country's info
 */
function getCountryWiki(countryName, languageCode) {

  // verifying valitidity of parameters
  if (!countryName || !languageCode) {
    return Promise.resolve({
      error: true,
      message: 'Country name and language code are required',
    });
  }

  // fetching from the API
  return fetch(`${COUNTRY_WIKI_URL_PREFIX}${countryName}`)
    .then(res => {
      if (!res.ok) {
        throw new Error('Wikipedia API Network response error');
      }
      return res.json();
    })
    .then(data => {
      if (data?.error) {
        throw new Error(data.detail || 'API Error getting Wikipedia info');
      }
      return data;
    })
    .catch(err => {
      return {
        error: true,
        message: 'API Error getting Wikipedia info',
        defaultMessage: err.message,
      };
    });
}

export { getCountryWiki };
