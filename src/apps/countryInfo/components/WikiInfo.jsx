import { useContext } from "react";
import { useCountryWiki } from "../hooks/useCountryWiki.js";
import { renderContent } from '../services/renderContent.jsx';
import { LanguageContext } from "../../../context/LanguageContext.js";
import PropTypes from 'prop-types';
import '../styles/wikiInfo.css'

function WikiInfo({ countryName }) {
  const { languageCode, t } = useContext(LanguageContext)
  const { wikiInfo, error, isLoading } = useCountryWiki({ countryName, languageCode })

  const content = (
    <div className="wikiInfo-div">
      {wikiInfo?.extract
        ? <p className="wikiInfo-p">{wikiInfo?.extract}</p>
        : <p className="wikiInfo-p errorMessage">{t?.subAppInfo.wikiInfoNotFound}</p>
      }
    </div>
  );

  return renderContent({ wikiInfo, t, isLoading, error, content })
}

// Prop validation
WikiInfo.propTypes = {
  countryName: PropTypes.string,
  languageCode: PropTypes.string.isRequired,
  t: PropTypes.object.isRequired,
};

export { WikiInfo }
