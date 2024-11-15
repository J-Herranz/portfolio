import { useEffect, useState } from "react";
import { getCountryInfo } from '../services/getCountryInfo.js';

function useCountryInfo({ countryCode, setCountryName }) {
  const [countryInfo, setCountryInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const refreshCountryInfo = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const newInfo = await getCountryInfo({ countryCode });
      setCountryInfo(newInfo);

      if (newInfo.error) {
        setCountryName(null);
      } else {
        setCountryName(newInfo.name.common);
      }
    } catch (err) {
      setError(err.message);
      setCountryName(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (countryCode) {
      refreshCountryInfo();
    }
  }, [countryCode]);

  return { countryInfo, isLoading, error };
}

export { useCountryInfo };