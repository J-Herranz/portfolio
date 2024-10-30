import { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext.js';
import PropTypes from 'prop-types';
import '../styles/gridCell.css'

function GridCell({ cellInnerValue, cellState }) {

  const { darkmodeBool } = useContext(ThemeContext)

  const stateStyles = [
    'notPresent',
    'wrongPosition',
    'rightPosition'
  ]

  return (
    <div className={`gridCell-div ${stateStyles[cellState]}`} style={{ borderColor: darkmodeBool ? '#ccc' : '#333' }}>
      <p className={stateStyles[cellState]} style={{ color: darkmodeBool ? '#ccc' : '#333' }}>{cellInnerValue}</p>
    </div>
  );

}

// Prop validation
GridCell.propTypes = {
  cellInnerValue: PropTypes.string.isRequired,
  cellState: PropTypes.number.isRequired,
};

export { GridCell }