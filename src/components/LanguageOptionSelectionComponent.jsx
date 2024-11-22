import React, { useRef } from "react";
import { useLanguageSelection } from "../hooks/useLanguageSelection.js";
import { useOutsideClickLanguageSelection } from "../hooks/useOutsideClickLanguageSelection.js"
import { LanguageOption } from "./LanguageOption";
import PropTypes from 'prop-types';

import frenchFlag from "../assets/flag-icons/flag-france.png";
import ukFlag from "../assets/flag-icons/flag-uk.png";
import spanishFlag from "../assets/flag-icons/flag-spain.png";

import "../styles/LanguageOptionSelectionComponent.css";

function LanguageOptionSelectionComponent({ setLanguage, currentLanguageCode }) {
  const {
    selectingLanguage,
    handleChooseLanguage,
    handleSelectLanguage,
    setSelectingLanguage
  } = useLanguageSelection(setLanguage);

  const containerRef = useRef(null);

  useOutsideClickLanguageSelection(containerRef, () => setSelectingLanguage(false), selectingLanguage);

  const rearrangedOptions = () => {
    // getting selected element
    const selectedElement = languageOptions.find(option =>
      option.props.languageCode === currentLanguageCode
    );

    // getting the rest of the elements
    const otherElements = languageOptions.filter(option =>
      option.props.languageCode !== currentLanguageCode
    );

    // sort of the other elements alphabetically
    otherElements.sort((a, b) =>
      a.props.languageName.localeCompare(b.props.languageName)
    );

    return [selectedElement, ...otherElements];
  };

  const en_element = <LanguageOption srcImg={ukFlag} demonym="UK" languageName="English" languageCode="en" setLanguage={handleSelectLanguage} />;
  const es_element = <LanguageOption srcImg={spanishFlag} demonym="Spanish" languageName="Español" languageCode="es" setLanguage={handleSelectLanguage} />;
  const fr_element = <LanguageOption srcImg={frenchFlag} demonym="French" languageName="Français" languageCode="fr" setLanguage={handleSelectLanguage} />;

  let languageOptions = [
    en_element,
    es_element,
    fr_element
  ];

  // Reorganizing all language options
  const organizedOptions = rearrangedOptions();

  return (
    <div className={`languageOptions-container-div" ${selectingLanguage ? 'expanded-language-options' : ''}`}
      onClick={(e) => { e.stopPropagation(); handleChooseLanguage(currentLanguageCode) }}
      ref={containerRef}
    >
      {selectingLanguage ? (
        // showing all options if choosing a language
        organizedOptions.map((option, index) =>
          React.cloneElement(option, { key: index })
        )
      ) : (
        // choosing just selected option if not choosing a new language option
        organizedOptions[0]
      )}
    </div>
  );
}

// Prop validation
LanguageOptionSelectionComponent.propTypes = {
  setLanguage: PropTypes.func.isRequired,
  currentLanguageCode: PropTypes.string.isRequired,
};

export { LanguageOptionSelectionComponent };
