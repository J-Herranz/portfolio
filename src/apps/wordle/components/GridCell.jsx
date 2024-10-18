import { useState } from 'react'
import PropTypes from 'prop-types';
import '../styles/gridCell.css'



function GridCell({ gridCellValue }) {
  const [cellState, setCellState] = useState(0)

  const stateStyles = [
    'cell-empty',
    'cell-present',
    'cell-correct'
  ]

  return (
    <div className={`gridCell-div ${stateStyles[cellState]}`}>
      <p className={stateStyles[gridCellValue?.state]}>{gridCellValue?.innerValue}</p>
    </div>
  );

}

// Prop validation
GridCell.propTypes = {
  gridCellValue: PropTypes.object.isRequired,
};

export { GridCell }