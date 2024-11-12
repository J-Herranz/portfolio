import { useCallback } from 'react';
import { LanguageContext } from '../context/LanguageContext.js';
import { ThemeContext } from '../context/ThemeContext.js';
//import { AmazonScraper } from '../apps/amazonScrapper/components/AmazonScraper';
import { Calculator } from '../apps/calculator/components/Calculator';
import { CountryInfo } from '../apps/countryInfo/components/CountryInfo';
import { Home } from '../apps/home/components/Home';
import { Survey } from '../apps/survey/components/Survey';
import { Wordle } from '../apps/wordle/components/Wordle';

const useRenderSubApp = ({ currentApp, setCurrentApp, darkmodeBool, languageCode, t }) => {

  const renderApp = useCallback(() => {
    let AppComponent
    let translations

    switch (currentApp) {
      /*
      case 'amazonScraper':
        AppComponent = AmazonScraper
        translations = { subAppInfo: { ...t?.subAppInfo.find(app => app.appCode === 'amazonScraper') }, amazonScraper: { ...t?.amazonScraper } }
        break;
      */
      case 'calculator':
        AppComponent = Calculator
        translations = { subAppInfo: { ...t?.subAppInfo.find(app => app.appCode === 'calculator') }, calculator: { ...t?.calculator } }
        break;
      case 'countryInfo':
        AppComponent = CountryInfo
        translations = { subAppInfo: { ...t?.subAppInfo.find(app => app.appCode === 'countryInfo') }, countryInfo: { ...t?.countryInfo } }
        break;
      case 'survey':
        AppComponent = Survey
        translations = { subAppInfo: { ...t?.subAppInfo.find(app => app.appCode === 'survey') }, survey: { ...t?.survey } }
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