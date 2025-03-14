import { useReducer } from "react"
import { SubAppTitle } from "../../../components/SubAppTitle"
import { DigitButton } from "./DigitButton"
import { OperationButton } from "./OperationButton"
import { ACTIONS } from '../constants/constants.js'
import { reducer, formatOperand } from "../services/calculatorLogic.js"
import "../styles/calculator.css"

function Calculator() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  )

  return (
    <>
      <SubAppTitle />
      <div className="calculator-grid-container">
        <div className="calculator-grid">
          <div className="output">
            <div className="previous-operand">
              {formatOperand({ operand: previousOperand })} {operation}
            </div>
            <div className="current-operand">{formatOperand({ operand: currentOperand })}</div>
          </div>
          <button
            className="calculator-button span-two"
            onClick={() => dispatch({ type: ACTIONS.CLEAR })}
          >
            AC
          </button>
          <button onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })} className="calculator-button">
            DEL
          </button>
          <OperationButton operation="÷" dispatch={dispatch} />
          <DigitButton digit="1" dispatch={dispatch} />
          <DigitButton digit="2" dispatch={dispatch} />
          <DigitButton digit="3" dispatch={dispatch} />
          <OperationButton operation="*" dispatch={dispatch} />
          <DigitButton digit="4" dispatch={dispatch} />
          <DigitButton digit="5" dispatch={dispatch} />
          <DigitButton digit="6" dispatch={dispatch} />
          <OperationButton operation="+" dispatch={dispatch} />
          <DigitButton digit="7" dispatch={dispatch} />
          <DigitButton digit="8" dispatch={dispatch} />
          <DigitButton digit="9" dispatch={dispatch} />
          <OperationButton operation="-" dispatch={dispatch} />
          <DigitButton digit="." dispatch={dispatch} />
          <DigitButton digit="0" dispatch={dispatch} />
          <button
            className="calculator-button span-two"
            onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
          >
            =
          </button>
        </div>
      </div>
    </>
  )
}

export { Calculator }
