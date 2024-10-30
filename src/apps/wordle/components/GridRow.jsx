import { GridCell } from './GridCell';
import PropTypes from 'prop-types';
import '../styles/gridRow.css'


function GridRow({ rowNumber, rowContent }) {

  return (
    <div className='gridCell-container-div'>
      {rowContent.map((cellContent, index) =>
        <GridCell key={`R${rowNumber}C${index}`} cellInnerValue={cellContent?.innerValue} cellState={cellContent?.state} />
      )}
    </div>
  );
}

// Prop validation
GridRow.propTypes = {
  rowNumber: PropTypes.number.isRequired,
  rowContent: PropTypes.array.isRequired,
};

export { GridRow }