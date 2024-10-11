import PropTypes from 'prop-types';
import "../styles/LanguageOption.css"

function LanguageOption({ srcImg, demonym, languageName, languageCode, setLanguage }) {

  const altTemplate = `${demonym} Flag`

  return (
    <div className="languageOption-div" onClick={() => setLanguage(languageCode)}>
      <img src={srcImg} alt={altTemplate} /> <span>{languageName}</span>
    </div>
  );
}

// Prop validation
LanguageOption.propTypes = {
  srcImg: PropTypes.string.isRequired,
  demonym: PropTypes.string.isRequired,
  languageName: PropTypes.string.isRequired,
  languageCode: PropTypes.string.isRequired,
  setLanguage: PropTypes.func.isRequired,
};

export { LanguageOption }