const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
}

const CALCULATOR_BUTTONS = [
  'AC', 'DEL', '÷',
  '1', '2', '3', '*',
  '4', '5', '6', '+',
  '7', '8', '9', '-',
  '.', '0', '='
]

const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
})

export { ACTIONS, CALCULATOR_BUTTONS, INTEGER_FORMATTER }