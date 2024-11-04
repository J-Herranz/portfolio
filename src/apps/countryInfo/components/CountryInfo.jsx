import { useState, useContext } from 'react'
import { CountryFlag } from './CountryFlag'
import { WikiInfo } from './WikiInfo';
import { useCountryInfo } from "../hooks/useCountryInfo.js";
import { renderContent } from '../services/renderContent.jsx';
import { LanguageContext } from '../../../context/LanguageContext.js'
import { ThemeContext } from '../../../context/ThemeContext.js';
import randomCountry from 'random-country';
import '../styles/countryInfo.css'

function CountryInfo() {
  const [countryCode, setCountryCode] = useState('FR')
  const [countryName, setCountryName] = useState('France')
  const { countryInfo, isLoading, error } = useCountryInfo({ countryCode, setCountryName })
  const { t, languageCode } = useContext(LanguageContext)
  const { darkmodeBool } = useContext(ThemeContext)

  const newCountry = () => {
    setCountryCode(randomCountry())
  }

  // Content to show in case of success
  const content = (
    <>
      <h1 className="countryNameDiv" style={{ display: countryInfo?.name?.official ? 'flex' : 'none' }}>{countryInfo?.name?.official}</h1>
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

  return renderContent({ apiResponse: countryInfo, t, isLoading, error, content, renderAppTitle: true, countryCode })
}

export { CountryInfo }
