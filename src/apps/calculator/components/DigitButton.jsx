import { ACTIONS } from "../constants/constants.js"
import PropTypes from 'prop-types'

function DigitButton({ dispatch, digit }) {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
      className="calculator-button"
    >
      {digit}
    </button>
  )
}

// Prop validation
DigitButton.propTypes = {
  dispatch: PropTypes.func,
  digit: PropTypes.string.isRequired,
}

export { DigitButton }
