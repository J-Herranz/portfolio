import { CvComponent } from "./CvComponent";
import { LanguageOptionSelectionComponent } from "./LanguageOptionSelectionComponent";
import { slide as BurgerMenu } from 'react-burger-menu';
import { useOutsideClickBurgerMenu } from '../hooks/useOutsideClickBurgerMenu.js';
import { SubAppOption } from "./SubAppOption";
import PropTypes from 'prop-types';
import { handleSubAppSelection } from "../services/handleSubAppSelection.js";
import "../styles/Header.css";

function Header({ setApp, setLanguage, languageCode, t }) {

  // manage the closing of the burger menu when clicking outside of it
  const { isOpen, setIsOpen, menuRef, closeMenu } = useOutsideClickBurgerMenu();

  return (
    <header>
      <nav>
        <CvComponent languageCode={languageCode} />

        <div style={{ display: "flex", gap: "2rem", marginRight: "2rem" }}>
          <LanguageOptionSelectionComponent setLanguage={setLanguage} currentLanguageCode={languageCode} />

          <div ref={menuRef}>
            <BurgerMenu
              right
              isOpen={isOpen}
              onStateChange={({ isOpen }) => setIsOpen(isOpen)}
              t={t}
              setApp={setApp}
            >
              <div className="burgerBar-options-div">
                {t.map((value) => (
                  /*<SubAppOption key={value.appCode} appCode={value.appCode} appName={value.appName} appIconFile={value.appIconFile} onClick={() => { closeMenu(); setApp(value.appCode) }} />*/
                  <SubAppOption key={value.appCode} appCode={value.appCode} appName={value.appName} appIconFile={value.appIconFile} onClick={() => { closeMenu(); handleSubAppSelection({ setCurrentApp: setApp, appUrl: value.appUrl, appCode: value.appCode }) }} />
                ))}
              </div>
            </BurgerMenu>
          </div>
        </div>
      </nav>
    </header>
  );
}

// Prop validation
Header.propTypes = {
  setApp: PropTypes.func.isRequired,
  setLanguage: PropTypes.func.isRequired,
  languageCode: PropTypes.string.isRequired,
  t: PropTypes.array.isRequired,
};

export { Header };