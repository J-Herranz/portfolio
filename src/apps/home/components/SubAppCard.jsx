import PropTypes from 'prop-types';
import { handleSubAppSelection } from '../../../services/handleSubAppSelection.js'
import "../styles/subAppCard.css"

function SubAppCard({ appCode, src, subAppTitle, subAppDescription, setCurrentApp, appUrl }) {

  return (
    <article className="subAppCard" onClick={() => handleSubAppSelection({ setCurrentApp, appUrl, appCode })}>
      {src ? <img src={`/assets/apps-thumbnails/${src}`} alt={`${subAppTitle} Thumbnail`} /> : <p>Loading image...</p>}
      <div>
        <h4>{subAppTitle}</h4>
        <p>{subAppDescription}</p>
      </div>
    </article>
  );
}

// Prop validation
SubAppCard.propTypes = {
  appCode: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  subAppTitle: PropTypes.string.isRequired,
  subAppDescription: PropTypes.string.isRequired,
  setCurrentApp: PropTypes.func.isRequired,
  appUrl: PropTypes.string.isRequired,
};

export { SubAppCard }