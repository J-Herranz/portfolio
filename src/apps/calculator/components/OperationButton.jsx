import { ACTIONS } from "../constants/constants.js"
import PropTypes from 'prop-types'

function OperationButton({ dispatch, operation }) {
  return (
    <button
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
      className="calculator-button"
    >
      {operation}
    </button>
  )
}

// Prop validation
OperationButton.propTypes = {
  dispatch: PropTypes.func,
  operation: PropTypes.string.isRequired,
}

export { OperationButton }
