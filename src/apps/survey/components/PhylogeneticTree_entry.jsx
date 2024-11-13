import { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext.js'
import PropTypes from 'prop-types'
import '../styles/phylogeneticTree_entry.css'

function PhylogeneticTree_entry({ name, binomialNomenclature, img }) {
  const { darkmodeBool } = useContext(ThemeContext);

  const showInfoCard = () => {
    console.log('Mostrando info card')
  }

  return (
    <>
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
    </>
  );
}

// Prop validation
PhylogeneticTree_entry.propTypes = {
  name: PropTypes.string,
  binomialNomenclature: PropTypes.string,
  img: PropTypes.string,
};

export { PhylogeneticTree_entry }