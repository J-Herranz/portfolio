import { ACTIONS, INTEGER_FORMATTER } from '../constants/constants.js'


// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
/**
 * Reducer function that handles different actions for updating the calculator's state.
 * 
 * This reducer manages the calculation state based on the type of action dispatched. It supports 
 * adding digits, selecting operations, clearing the state, deleting digits, and evaluating the 
 * result of the current operation.
 * 
 * @param {Object} state - The current state of the calculator.
 * @param {Object} action - The action that will update the state.
 * @param {string} action.type - The type of action to be performed (e.g., "add-digit", "choose-operation").
 * @param {Object} action.payload - The payload containing data required for the action (e.g., digit or operation).
 * @returns {Object} - The updated state based on the action type.
 */
function reducer(state, { type, payload }) {
  switch (type) {

    case ACTIONS.ADD_DIGIT:
      // if the user enters 0 and then another digit, 0 is overwritten
      if (payload.digit && state.currentOperand === "0") {
        return {
          ...state,
          currentOperand: payload.digit
        }
      }
      // if the operand already as a period, it is not possible to add a second one
      if (payload.digit === "." && state.currentOperand?.includes(".")) {
        return state;
      }

      // if the state as overwrite activated, the operand is overwritten
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload.digit,
          overwrite: false,
        }
      }

      // Si el operando es "0" y ya existe otro "0", no hace nada
      if (payload.digit === "0" && state.currentOperand === "0") {
        return state
      }

      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      }

    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null) {
        return state
      }

      if (state.currentOperand == null) {
        return {
          ...state,
          operation: payload.operation,
        }
      }

      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        }
      }

      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: null,
      }

    case ACTIONS.CLEAR:
      return {}

    case ACTIONS.DELETE_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentOperand: null,
        }
      }
      if (state.currentOperand == null) return state
      if (state.currentOperand.length === 1) {
        return { ...state, currentOperand: null }
      }

      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      }

    case ACTIONS.EVALUATE:
      if (
        state.operation == null ||
        state.currentOperand == null ||
        state.previousOperand == null
      ) {
        return state
      }

      return {
        ...state,
        overwrite: true,
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state),
      }
  }
}


// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
/**
 * Evaluates the result of a mathematical operation between two operands.
 * 
 * This function performs the specified operation (addition, subtraction, multiplication, or division)
 * between the current operand and the previous operand.
 * If either operand is not a valid number, an empty string is returned.
 * 
 * @param {Object} params - The parameters containing the operands and the operation.
 * @param {string} params.currentOperand - The current operand (number in string format).
 * @param {string} params.previousOperand - The previous operand (number in string format).
 * @param {string} params.operation - The mathematical operation to perform: "+", "-", "*", or "÷".
 * @returns {string} - The result of the operation as a string, or an empty string if operands are invalid.
 */
function evaluate({ currentOperand, previousOperand, operation }) {
  const prev = parseFloat(previousOperand)
  const current = parseFloat(currentOperand)
  if (isNaN(prev) || isNaN(current)) return ""
  let computation = ""
  switch (operation) {
    case "+":
      computation = prev + current
      break
    case "-":
      computation = prev - current
      break
    case "*":
      computation = prev * current
      break
    case "÷":
      computation = prev / current
      break
  }

  return computation.toString()
}


// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
/**
 * Formats the given operand by separating the integer and decimal parts, and applying number formatting.
 * If the operand is null or undefined, it returns undefined.
 * 
 * @param {Object} params - Object containing all parameters
 * @param {string} params.operand - The operand to format (a string that may contain an integer and/or a decimal part).
 * @returns {string|undefined} - The formatted operand as a string, or undefined if the operand is null or undefined.
 */
function formatOperand({ operand }) {
  if (operand == null) return
  const [integer, decimal] = operand.split(".")
  if (decimal == null) return INTEGER_FORMATTER.format(integer)
  return `${INTEGER_FORMATTER.format(integer)}.${decimal}`
}


export { reducer, evaluate, formatOperand }