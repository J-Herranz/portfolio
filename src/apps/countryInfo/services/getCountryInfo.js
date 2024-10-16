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
      const errorData = await response.json();
      throw new Error(errorData.message || 'restcountries API Network response error');
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
      message: err.message,
      defaultMessage: 'API Error in the receival of the country flag and common name',
    };
  }
}

export { getCountryInfo };

/*
const API_ENDPOINT = 'https://api.open-meteo.com/v1/forecast'
const COORDS = 'latitude=48.87&longitude=2.33'
const TIMEZONE = 'Europe/Berlin'
const CURRENT_INFO = 'temperature_2m,relative_humidity_2m'
const DAYLY_INFO = 'weather_code,temperature_2m_max,temperature_2m_min'

const LINK = `${API_ENDPOINT}
?${COORDS}
&current=${CURRENT_INFO}
&daily=${DAYLY_INFO}
&timezone=${TIMEZONE}`
*/