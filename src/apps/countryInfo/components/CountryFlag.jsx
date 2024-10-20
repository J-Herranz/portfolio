import PropTypes from 'prop-types';
import '../styles/CountryFlag.css'

function CountryFlag({ countryInfo, countryCode, t }) {
  return (
    <>
      <div className="flagDiv">
        {countryInfo.error ? <p>{`${t?.subAppInfo?.countryNotFound} (${t?.subAppInfo?.countryCode} : ${countryCode})`}</p> : <img src={countryInfo.flags.svg} alt={countryInfo.flags.alt} />}
      </div>
    </>
  );
}

// Prop validation
CountryFlag.propTypes = {
  countryInfo: PropTypes.object,
  countryCode: PropTypes.string.isRequired,
  t: PropTypes.object.isRequired,
};

export { CountryFlag }
