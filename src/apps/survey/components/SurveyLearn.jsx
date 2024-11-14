import { useContext, useState } from 'react'
import { LanguageContext } from '../../../context/LanguageContext.js'
import { ThemeContext } from '../../../context/ThemeContext.js'
import '../styles/surveyLearn.css'
import { PhylogeneticTree } from './PhylogeneticTree.jsx'
import { SurveyInfoCard } from './SurveyInfoCard.jsx'
import PropTypes from 'prop-types'

function SurveyLearn({ returnButtonFunc }) {
  const { t } = useContext(LanguageContext);
  const { darkmodeBool } = useContext(ThemeContext);
  const [cardSpecies, setCardSpecies] = useState('')
  const [isSpotDifferencesImgVisible, setIsSpotDifferencesImgVisible] = useState(false);

  const popupImage = `/assets/survey_images/felinesSpotsSchema.jpg`

  const speciesEnglishName = {
    "Neofelis nebulosa": "cloudedLeopard",
    "Panthera tigris": "tiger",
    "Panthera uncia": "snowLeopard",
    "Panthera onca": "jaguar",
    "Panthera leo": "lion",
    "Panthera pardus": "leopard",
    "Leptailurus serval": "serval",
    "Caracal caracal": "caracal",
    "Leopardus pardalis": "ocelot",
    "Lynx": "lynx",
    "Acinonyx jubatus": "cheetah",
    "Puma concolor": "cougar",
    "Felis catus": "cat",
  }

  const closePopup = () => {
    setIsSpotDifferencesImgVisible(false);
  };

  return (
    <>
      <div className='surveyLearn-div'>
        <PhylogeneticTree setCardSpecies={setCardSpecies} />
        {cardSpecies &&
          <SurveyInfoCard
            cardInfo={t?.survey?.species?.[speciesEnglishName[cardSpecies]]}
            speciesEnglishName={speciesEnglishName[cardSpecies]}
            setIsSpotDifferencesImgVisible={setIsSpotDifferencesImgVisible}
          />}
      </div>
      <button onClick={() => returnButtonFunc()}>{t?.survey?.backToSurveyMain}</button>

      {isSpotDifferencesImgVisible && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content">
            <img src={popupImage} alt="Popup" onClick={closePopup} />
          </div>
        </div>
      )}
    </>
  );
}

SurveyLearn.propTypes = {
  returnButtonFunc: PropTypes.func.isRequired,
}

export { SurveyLearn }