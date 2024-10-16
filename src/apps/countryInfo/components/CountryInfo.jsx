import { useState } from 'react'
import { CountryFlag } from './CountryFlag'
import { WikiInfo } from './WikiInfo';
import { useCountryInfo } from "../hooks/useCountryInfo.js";
import { renderContent } from '../services/renderContent.jsx';
import randomCountry from 'random-country';
import PropTypes from 'prop-types';
import '../styles/countryInfo.css'

function CountryInfo({ t, languageCode, darkmodeBool }) {
  const [countryCode, setCountryCode] = useState('fr')
  const [countryName, setCountryName] = useState('France')
  const { countryInfo, isLoading, error } = useCountryInfo({ countryCode, setCountryName })

  const newCountry = () => {
    setCountryCode(randomCountry())
  }

  // Content to show in case of success
  const content = (
    <>
      <h1 className="countryNameDiv">{countryInfo?.name?.official}</h1>
      <div className='flagAndInfo-div'>
        <CountryFlag
          countryInfo={countryInfo}
          countryCode={countryCode}
          t={t}
        />

        <WikiInfo
          countryName={countryName}
          languageCode={languageCode}
          t={t}
          darkmodeBool={darkmodeBool}
        />
      </div>
      <button id='newCountry-button' onClick={newCountry}>{t?.countryInfo?.newCountryButton}</button>
    </>)

  return renderContent({ apiResponse: countryInfo, t, isLoading, error, content, darkmodeBool, renderAppTitle: true, countryCode })
}

// Prop validation
CountryInfo.propTypes = {
  t: PropTypes.object.isRequired,
  languageCode: PropTypes.string.isRequired,
  darkmodeBool: PropTypes.bool.isRequired,
};

export { CountryInfo }
