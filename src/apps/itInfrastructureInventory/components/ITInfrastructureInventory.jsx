import { useContext } from 'react'

import { LanguageContext } from '../../../context/LanguageContext.js'
import { SubAppTitle } from "../../../components/SubAppTitle"
import { SliderWithText } from '../../../components/SliderWithText.jsx' 

import '../styles/itInfrastructureInventory.css'

function ITInfrastructureInventory() {
  const { t } = useContext(LanguageContext)

  return (
    <>
      <SubAppTitle />
      <SliderWithText content={ t.itInfrastructureInventory } />
    </>
  );
}

export { ITInfrastructureInventory }