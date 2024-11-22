import { useState } from "react";

const useLanguageSelection = (setLanguage) => {
  const [selectingLanguage, setSelectingLanguage] = useState(false);

  /*
  const handleChooseLanguage = () => {
    setSelectingLanguage(!selectingLanguage);
  };
  */

  const handleChooseLanguage = (currentLanguageCode) => {
    // warning message if the user is passing the survey
    if (document.getElementsByClassName('surveyQuestions-div')[0] && !selectingLanguage) {
      const languageChangeWarning = {
        en: "Changing the language will cause any changes to the survey to be lost. Do you wish to continue?",
        es: "Cambiar el idioma hará que se pierdan los cambios realizados en la encuesta. ¿Deseas continuar?",
        fr: "Changer la langue entraînera la perte de toutes les modifications apportées au sondage. Voulez-vous continuer ?"
      };

      // checking if the user wants to change the language
      const confirmation = confirm(languageChangeWarning[currentLanguageCode]);

      // if the user taps "Cancel", the process is stopped
      if (!confirmation) {
        setSelectingLanguage(false);
        return;
      }
    }

    // if the user taps "Acept", the state is change to proceed to the language change
    setSelectingLanguage(!selectingLanguage);
  };

  const handleSelectLanguage = (languageCode) => {
    setSelectingLanguage(false);
    setLanguage(languageCode);
  };

  return {
    selectingLanguage,
    handleChooseLanguage,
    handleSelectLanguage,
    setSelectingLanguage
  };
};

export { useLanguageSelection }