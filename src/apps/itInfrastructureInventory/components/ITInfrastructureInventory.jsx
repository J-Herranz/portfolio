import { useContext } from 'react'

import { LanguageContext } from '../../../context/LanguageContext.js'
import { ThemeContext } from '../../../context/ThemeContext.js'
import { SubAppTitle } from "../../../components/SubAppTitle"

function ITInfrastructureInventory({ pepito }){
  const { t, languageCode } = useContext(LanguageContext)
  const { darkmodeBool } = useContext(ThemeContext)



  return (
    <>
      <SubAppTitle />
      <h1>netidn</h1>
    </>
  );
}

export { ITInfrastructureInventory }