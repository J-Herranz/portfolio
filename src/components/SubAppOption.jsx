import PropTypes from 'prop-types';
import "../styles/SubAppOption.css"

function SubAppOption({ appName, appCode, appIconFile, onClick }) {

  const appIcon = `/assets/app-icons/${appIconFile}`

  return (
    <>
      <div className="burgerBar-option" onClick={onClick}>
        {<img src={appIcon} alt='' />}
        {appName}
      </div>
      {appCode === 'home' && <hr />}
    </>
  );
}

// Prop validation
SubAppOption.propTypes = {
  appName: PropTypes.string.isRequired,
  appCode: PropTypes.string.isRequired,
  appIconFile: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export { SubAppOption }