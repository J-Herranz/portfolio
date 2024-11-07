import { useState, useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/subAppTitle.css'

function SubAppTitle() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useContext(LanguageContext)
  const { darkmodeBool } = useContext(ThemeContext)

  let styles, srcLocation, backgroundColor

  if (darkmodeBool) {
    styles = { color: "black" }
    srcLocation = "/assets/app-icons/info1_black.png"
    backgroundColor = '#E1E1E1'
  } else {
    styles = { color: "white" }
    srcLocation = "/assets/app-icons/info1_white.png"
    backgroundColor = '#1E1E1E'
  }

  //console.log(`SubAppTitle, darkmodeBool value : ${darkmodeBool}`)

  return (
    <>
      <div className='subAppTitle-div' style={{ backgroundColor: backgroundColor }}>
        <h1 style={styles}>{t?.subAppInfo?.appName}</h1>
        <div className='subAppTitle-toolTip-div'
          onClick={() => setIsVisible(!isVisible)}
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}>
          <img src={srcLocation} alt="Info Icon" />
          <p style={{ display: isVisible ? "block" : "none" }}>{t?.subAppInfo?.toolTipInfo}</p>
        </div>
      </div>
    </>
  );
}

export { SubAppTitle }