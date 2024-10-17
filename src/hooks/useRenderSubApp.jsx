import { useCallback } from 'react';
import { CountryInfo } from '../apps/countryInfo/components/CountryInfo';
import { Home } from '../apps/home/components/Home';
import { WordleGrid } from '../apps/wordle/components/WordleGrid';

const useRenderSubApp = (currentApp, translations, setCurrentApp, language) => {
  return useCallback(({ darkmodeBool }) => {
    switch (currentApp) {
      case 'countryInfo':
        return <CountryInfo darkmodeBool={darkmodeBool} t={{ subAppInfo: { ...translations.subAppInfo.find(app => app.appCode === 'countryInfo') }, countryInfo: { ...translations.countryInfo } }} languageCode={language} />;
      case 'wordle':
        return <WordleGrid darkmodeBool={darkmodeBool} t={{ subAppInfo: { ...translations.subAppInfo.find(app => app.appCode === 'wordle') } }} languageCode={language} />;
      default:
        return <Home t={{ subAppInfo: [...translations.subAppInfo], home: { ...translations.home } }} setCurrentApp={setCurrentApp} />;
    }
  }, [currentApp, translations, setCurrentApp, language]);
};

export { useRenderSubApp };