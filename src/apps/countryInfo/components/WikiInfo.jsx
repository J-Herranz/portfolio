import { useCountryWiki } from "../hooks/useCountryWiki.js";
import PropTypes from 'prop-types';

function WikiInfo({ countryName, languageCode }) {
  const { wikiInfo } = useCountryWiki({ countryName, languageCode })

  return (
    <>
      {wikiInfo?.extract
        ? <p>{wikiInfo?.extract}</p>
        : <p>Wikipedia info not found</p>
      }
    </>
  );
}

// Prop validation
WikiInfo.propTypes = {
  countryName: PropTypes.string.isRequired,
  languageCode: PropTypes.string.isRequired,
};

export { WikiInfo }
