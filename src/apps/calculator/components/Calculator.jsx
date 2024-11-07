import { SubAppTitle } from "../../../components/SubAppTitle"
import '../styles/calculator.css'


function Calculator() {
  /*
    const calculatorButtons = [
      ['AC', 'DEL', '÷'],
      ['1', '2', '3', '*'],
      ['4', '5', '6', '+'],
      ['7', '8', '9', '-'],
      ['.', '0', '='],
    ]*/
  const calculatorButtons = [
    'AC', 'DEL', '÷',
    '1', '2', '3', '*',
    '4', '5', '6', '+',
    '7', '8', '9', '-',
    '.', '0', '='
  ]

  const getButtonClass = ({ button }) => {
    if (button === 'AC' || button === '=') {
      return 'calculator-button span-two'; // Botones AC y = tienen un estilo especial
    }
    return 'calculator-button'; // Los demás botones
  };

  return (
    <>
      <SubAppTitle />

      <div className="calculator-grid">
        <div className="output">
          <div className="previous-operand">123,456 * </div>
          <div className="current-operand">456,123</div>
        </div>
        {

          calculatorButtons.map((button, buttonIndex) => (
            <button key={`${buttonIndex}`} className={getButtonClass({ button })}>
              {button}
            </button>
          ))
        }


        {
          /*
                    calculatorButtons.map((row, rowIndex) => (
                <div key={rowIndex} className="button-row">
                  {row.map((button, buttonIndex) => (
                    <button key={`${rowIndex}${buttonIndex}`} className={getButtonClass({ button })}>
                      {button}
                    </button>
                  ))
                  }
                </div>
                ))*/
        }
      </div >
    </>
  );
}

export { Calculator }