import { useEffect, useState } from 'react';
import { getCountryWiki } from '../services/getCountryWiki';

function useCountryWiki({ countryName, languageCode }) {
  const [wikiInfo, setWikiInfo] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const refreshWikiInfo = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const newInfo = await getCountryWiki(countryName, languageCode);
      if (newInfo.error) {
        throw new Error(newInfo.message || 'Failed to fetch country info');
      }
      setWikiInfo(newInfo);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (countryName) {
      refreshWikiInfo();
    }
  }, [countryName]);

  return { wikiInfo, error, isLoading };
}

export { useCountryWiki };