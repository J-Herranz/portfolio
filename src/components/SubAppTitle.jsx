import PropTypes from 'prop-types';
import '../styles/subAppTitle.css'

function SubAppTitle({ appTitle, darkmodeBool }) {
  console.log(`darkmodeBool : ${darkmodeBool}`)
  console.log(darkmodeBool)
  const styles = darkmodeBool ? { color: "red" } : { color: "blue" }
  return (
    <div className='subAppTitle-div'>
      <h1 style={styles}>{appTitle}</h1>
      <div className='subAppTitle-toolTip-div'>
        <img src="/assets/app-icons/info1_white.png" alt="Info Icon" />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi molestias facilis explicabo similique omnis! Fuga nesciunt quia pariatur accusantium natus, quod ipsam, qui libero recusandae nobis inventore illum nemo! Id!</p>
      </div>
    </div>
  );
}

// Prop validation
SubAppTitle.propTypes = {
  appTitle: PropTypes.string.isRequired,
};

export { SubAppTitle }