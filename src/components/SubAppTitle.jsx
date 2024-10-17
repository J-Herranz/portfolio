import { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/subAppTitle.css'

function SubAppTitle({ appTitle, darkmodeBool, toolTipInfo }) {
  const [isVisible, setIsVisible] = useState(false);
  let styles, srcLocation

  if (darkmodeBool) {
    styles = { color: "white" }
    srcLocation = "/assets/app-icons/info1_white.png"
  } else {
    styles = { color: "black" }
    srcLocation = "/assets/app-icons/info1_black.png"
  }

  return (
    <>
      <div className='subAppTitle-div'>
        <h1 style={styles}>{appTitle}</h1>
        <div className='subAppTitle-toolTip-div'
          onClick={() => setIsVisible(!isVisible)}
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}>
          <img src={srcLocation} alt="Info Icon" />
          <p style={{ display: isVisible ? "block" : "none" }}>{toolTipInfo}</p>
        </div>
      </div>
      <hr className='subAppTitle-hr' />
    </>
  );
}

// Prop validation
SubAppTitle.propTypes = {
  appTitle: PropTypes.string.isRequired,
  darkmodeBool: PropTypes.bool.isRequired,
  toolTipInfo: PropTypes.string.isRequired,
};

export { SubAppTitle }