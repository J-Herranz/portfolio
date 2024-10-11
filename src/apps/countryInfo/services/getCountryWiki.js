function getCountryWiki(countryName, languageCode) {
  //const COUNTRY_WIKI_URL_PREFIX = `https://${languageCode}.wikipedia.org/api/rest_v1/page/summary/`
  const COUNTRY_WIKI_URL_PREFIX = `https://en.wikipedia.org/api/rest_v1/page/summary/`;

  if (!countryName || !languageCode) {
    return Promise.resolve({
      error: true,
      message: 'Country name and language code are required',
    });
  }

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
