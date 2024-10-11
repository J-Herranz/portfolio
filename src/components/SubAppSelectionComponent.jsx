import { SubAppOption } from "./SubAppOption";
import PropTypes from 'prop-types';

import "../styles/SubAppSelectionComponent.css"

function SubAppSelectionComponent({ burgerBar, t, setApp }) {

  return (
    <div className="burgerBar-container-div">
      <button><img src={burgerBar} /></button>
      <div className="burgerBar-options-div">
        {Object.entries(t).map(([key, value]) => (
          <SubAppOption key={key} appName={value} onClick={() => setApp(key)} />
        ))}
      </div>
    </div>
  );
}

// Prop validation
SubAppSelectionComponent.propTypes = {
  burgerBar: PropTypes.string.isRequired,
  t: PropTypes.object.isRequired,
  setApp: PropTypes.func.isRequired,
};

export { SubAppSelectionComponent }
