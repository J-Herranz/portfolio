import { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext.js'
import { isDesktop } from 'react-device-detect';
import PropTypes from 'prop-types'
import '../styles/phylogeneticTree_entry.css'

function PhylogeneticTree_entry({ name, binomialNomenclature, img, setCardSpecies }) {
  const { darkmodeBool } = useContext(ThemeContext);

  const showInfoCard = () => {
    setCardSpecies(binomialNomenclature)
    if (!isDesktop) {
      window.scrollTo({
        top: document.documentElement.scrollHeight, // moves to the bottom
        behavior: 'smooth' // Smooth animation
      })
    }
  }

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