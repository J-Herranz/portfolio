import { useContext } from 'react'

import { LanguageContext } from '../../../context/LanguageContext.js'
import { SubAppTitle } from "../../../components/SubAppTitle"
import { SliderWithText } from '../../../components/SliderWithText.jsx'

import '../styles/hubPage.css'

function HubPage() {
  const { t } = useContext(LanguageContext)

  return (
    <>
      <SubAppTitle />
      <SliderWithText content={ t.hubPage } />
    </>
  );
}

export { HubPage }