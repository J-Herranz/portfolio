import "../styles/CvComponent.css"
import cv_image from "../assets/cv-icons/cv2_white.png"
import PropTypes from 'prop-types';

function CvComponent({ languageCode }) {
  const openCV = () => {
    window.open(`/assets/CVs/CV_HERRANZ_${languageCode}.pdf`, '_blank');
  };

  return (
    <div className="cv-button-div" onClick={openCV}>
      <img src={cv_image} alt="pepito" />
      <p className="bt-cv">CV</p>
    </div>
  );
}

// Prop validation
CvComponent.propTypes = {
  languageCode: PropTypes.string.isRequired,
};

export { CvComponent }