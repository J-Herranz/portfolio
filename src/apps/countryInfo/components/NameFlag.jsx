import { useCountryInfo } from "../hooks/useCountryInfo.js";
import PropTypes from 'prop-types';

function NameFlag({ countryCode, setCountryName }) {
  const { countryInfo } = useCountryInfo({ countryCode, setCountryName })

  if (!countryInfo) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1 className="countryNameDiv">{countryInfo.error ? countryInfo.message : countryInfo.name.official}</h1>
      <div className="flagDiv">
        {countryInfo.error ? <p>Flag not found</p> : <img src={countryInfo.flags.svg} alt={countryInfo.flags.alt} />}
      </div>
    </>
  );
}

// Prop validation
NameFlag.propTypes = {
  countryCode: PropTypes.string.isRequired,
  setCountryName: PropTypes.func.isRequired,
};

export { NameFlag }
