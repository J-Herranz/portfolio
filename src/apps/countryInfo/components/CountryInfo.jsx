import { useState } from 'react'
import { SubAppTitle } from '../../../components/SubAppTitle'
import { NameFlag } from './NameFlag'
import { WikiInfo } from './WikiInfo';
import randomCountry from 'random-country';
import PropTypes from 'prop-types';
import '../styles/countryInfo.css'

function CountryInfo({ t, languageCode, darkmodeBool }) {
  const [countryCode, setCountryCode] = useState('fr')
  const [countryName, setCountryName] = useState('France')

  const newCountry = () => {
    setCountryCode(randomCountry())
  }

  return (
    <>
      <SubAppTitle appTitle={t?.subAppInfo?.appName} darkmodeBool={darkmodeBool.current} />
      {countryCode &&
        <NameFlag
          countryCode={countryCode}
          setCountryName={setCountryName}
        />}

      <WikiInfo
        countryName={countryName}
        languageCode={languageCode}
      />
      <button onClick={newCountry}>{t?.countryInfo?.newCountryButton}</button>
    </>
  )
}

// Prop validation
CountryInfo.propTypes = {
  t: PropTypes.object.isRequired,
  languageCode: PropTypes.string.isRequired,
};

export { CountryInfo }
