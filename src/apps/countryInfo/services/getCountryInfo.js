const COUNTRY_INFO_URL_PREFIX = 'https://restcountries.com/v3.1/alpha?codes=';

async function getCountryInfo(countryCode) {
  // Validación de parámetro
  if (!countryCode) {
    return Promise.resolve({
      error: true,
      message: `Invalid country code (countryCode: ${countryCode})`,
    });
  }

  try {
    const response = await fetch(`${COUNTRY_INFO_URL_PREFIX}${countryCode}`);
    if (!response.ok) {
      throw new Error('restcountries API Network response error');
    }

    const data = await response.json();

    if (data?.status && Number.isInteger(data.status) && (data.status < 200 || data.status > 299)) {
      throw new Error(data.message || 'API Error in the receival of the country flag and common name');
    }

    const finalData = Array.isArray(data) ? data[0] : data;
    return finalData;

  } catch (err) {
    return {
      error: true,
      message: 'API Error in the receival of the country flag and common name',
      defaultMessage: err.message,
    };
  }
}

export { getCountryInfo };