import { useCallback } from 'react';
import { LanguageContext } from '../context/LanguageContext.js';
import { ThemeContext } from '../context/ThemeContext.js';
//import { AmazonScraper } from '../apps/amazonScrapper/components/AmazonScraper';
import { Calculator } from '../apps/calculator/components/Calculator';
import { CountryInfo } from '../apps/countryInfo/components/CountryInfo';
import { FoodMenuPage } from '../apps/foodMenuPage/components/FoodMenuPage';
import { Home } from '../apps/home/components/Home';
import { HubPage } from '../apps/hubPage/components/HubPage';
import { ITInfrastructureInventory } from '../apps/itInfrastructureInventory/components/ITInfrastructureInventory';
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
      case 'foodMenuPage':
        AppComponent = FoodMenuPage
        translations = { subAppInfo: { ...t?.subAppInfo.find(app => app.appCode === 'foodMenuPage') }, foodMenu: { ...t?.foodMenu } }
        break;
      case 'hubPage':
        AppComponent = HubPage
        translations = { subAppInfo: { ...t?.subAppInfo.find(app => app.appCode === 'hubPage') }, hubPage: { ...t?.hubPage } }
        break;
      case 'itInfrastructureInventory':
        AppComponent = ITInfrastructureInventory
        translations = { subAppInfo: { ...t?.subAppInfo.find(app => app.appCode === 'itInfrastructureInventory') }, itInfrastructureInventory: { ...t?.itInfrastructureInventory } }
        break;
      case 'survey':
        AppComponent = Survey
        translations = { subAppInfo: { ...t?.subAppInfo.find(app => app.appCode === 'survey') }, survey: { ...t?.survey } }
        break;
      case 'wordle':
        AppComponent = Wordle
        translations = { subAppInfo: { ...t?.subAppInfo.find(app => app.appCode === 'wordle') }, wordle: { ...t?.wordle } }
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