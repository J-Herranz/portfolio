import { useState, useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/subAppTitle.css'

function SubAppTitle() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useContext(LanguageContext)
  const { darkmodeBool } = useContext(ThemeContext)

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
        <h1 style={styles}>{t?.subAppInfo?.appName}</h1>
        <div className='subAppTitle-toolTip-div'
          onClick={() => setIsVisible(!isVisible)}
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}>
          <img src={srcLocation} alt="Info Icon" />
          <p style={{ display: isVisible ? "block" : "none" }}>{t?.subAppInfo?.toolTipInfo}</p>
        </div>
      </div>
      <hr className='subAppTitle-hr' />
    </>
  );
}

export { SubAppTitle }