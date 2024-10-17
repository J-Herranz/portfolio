import { useState } from 'react'
import PropTypes from 'prop-types';
import '../styles/gridCase.css'



function GridCase({ caseValue }) {
  const [caseState, setCaseState] = useState(0)

  const stateStyles = [
    'empty',
    'onBoard',
    'rightPosition'
  ]

  return (
    <div className={`gridCase-div ${stateStyles[caseState]}`}>
      <p>{caseValue}</p>
    </div>
  );

}

// Prop validation
GridCase.propTypes = {
  caseValue: PropTypes.string.isRequired,
};

export { GridCase }