import PropTypes from 'prop-types';
import '../styles/subAppTitle.css'

function SubAppTitle({ appTitle, darkmodeBool }) {
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
        <div className='subAppTitle-toolTip-div'>
          <img src={srcLocation} alt="Info Icon" />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi molestias facilis explicabo similique omnis! Fuga nesciunt quia pariatur accusantium natus, quod ipsam, qui libero recusandae nobis inventore illum nemo! Id!</p>
        </div>
      </div>
      <hr className='subAppTitle-hr' />
    </>
  );
}

// Prop validation
SubAppTitle.propTypes = {
  appTitle: PropTypes.string.isRequired,
  darkmodeBool: PropTypes.bool.isRequired
};

export { SubAppTitle }