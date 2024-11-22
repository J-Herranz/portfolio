import { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext.js'
import { isDesktop } from 'react-device-detect';
import PropTypes from 'prop-types'
import '../styles/phylogeneticTree_entry.css'

function PhylogeneticTree_entry({ name, binomialNomenclature, img, setCardSpecies }) {
  const { darkmodeBool } = useContext(ThemeContext);

  const scrollToInfoCard = () => {
    if (!isDesktop) {
      const surveyInfoCard = document.getElementById('surveyInfoCard');

      if (surveyInfoCard) {
        // getting the absolute position of the element in the document
        const rect = surveyInfoCard.getBoundingClientRect();
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        // calculation of the absolute position of the element regarding the document
        const absoluteTop = rect.top + scrollTop;

        // move the viewport to the calculated position
        window.scrollTo({
          top: absoluteTop,
          behavior: 'smooth'
        });
      } else {
        // waiting to the next animation cycle to verify again
        requestAnimationFrame(scrollToInfoCard);
      }
    }
  }

  const showInfoCard = () => {
    setCardSpecies(binomialNomenclature)
    scrollToInfoCard()
  }
  /*setTimeout(() => {
    if (!isDesktop) {
      window.scrollTo({
        top: document.getElementById('surveyInfoCard').getBoundingClientRect().top, // moves to the bottom
        behavior: 'smooth' // Smooth animation
      })
    }
  }
    , 200)*/

  return (
    <>
      {
        name && binomialNomenclature ?
          <div
            className={`phylogeneticTree_entry ${darkmodeBool ? 'dark' : 'light'} ${name && binomialNomenclature ? 'workingHover' : ''}`}
            onClick={name && binomialNomenclature ? () => showInfoCard() : undefined}>
            {name && binomialNomenclature ?
              <p>
                {name} <i>{`(${binomialNomenclature})`}</i> <img src={img} alt={`${name} image`} />
              </p>
              : <p>...</p>
            }
          </div>
          : undefined
      }
    </>
  );
}

// Prop validation
PhylogeneticTree_entry.propTypes = {
  name: PropTypes.string,
  binomialNomenclature: PropTypes.string,
  img: PropTypes.string,
  setCardSpecies: PropTypes.func,
};

export { PhylogeneticTree_entry }