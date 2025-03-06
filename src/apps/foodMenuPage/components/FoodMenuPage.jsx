import { useContext } from 'react'

import { LanguageContext } from '../../../context/LanguageContext.js'
import { SubAppTitle } from "../../../components/SubAppTitle"
import { SliderWithText } from '../../../components/SliderWithText.jsx' 

function FoodMenuPage(){
  const { t } = useContext(LanguageContext)
  
  return (
    <>
      <SubAppTitle />
      <SliderWithText content={ t.foodMenuPage } />
    </>
  );
}

export { FoodMenuPage }