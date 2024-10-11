import { useState } from "react";

const useLanguageSelection = (setLanguage) => {
  const [selectingLanguage, setSelectingLanguage] = useState(false);

  const handleChooseLanguage = () => {
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