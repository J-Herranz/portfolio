import { useCallback } from 'react';
import { LanguageContext } from '../context/LanguageContext.js';
import { ThemeContext } from '../context/ThemeContext.js';
import { CountryInfo } from '../apps/countryInfo/components/CountryInfo';
import { Home } from '../apps/home/components/Home';
import { Wordle } from '../apps/wordle/components/Wordle';

const useRenderSubApp = ({ currentApp, setCurrentApp, darkmodeBool, languageCode, t }) => {

  const renderApp = useCallback(() => {
    let AppComponent
    let translations

    switch (currentApp) {
      case 'countryInfo':
        AppComponent = CountryInfo
        translations = { subAppInfo: { ...t?.subAppInfo.find(app => app.appCode === 'countryInfo') }, countryInfo: { ...t?.countryInfo } }
        break;
      case 'wordle':
        AppComponent = Wordle
        translations = { subAppInfo: { ...t?.subAppInfo.find(app => app.appCode === 'wordle'), wordle: { ...t?.wordle } } }
        break;
      default:
        AppComponent = Home
        translations = { subAppInfo: [...t?.subAppInfo], home: { ...t?.home } }
    }
    //console.log(translations)
    return (
      <ThemeContext.Provider value={{ darkmodeBool }}>
        <LanguageContext.Provider value={{ languageCode, t: { ...translations } }}>
          <AppComponent
            setCurrentApp={setCurrentApp}
          />
        </LanguageContext.Provider>
      </ThemeContext.Provider>
    );
  }, [currentApp, darkmodeBool, languageCode, t, setCurrentApp]);

  return renderApp;
};

export { useRenderSubApp };