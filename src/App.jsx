import { useState, useEffect } from 'react';
import { useCurrentApp } from './hooks/useCurrentApp.js';
import { useTranslations } from './hooks/useTranslations.js';
import { useDarkMode } from './hooks/useDarkMode.js';
import { useRenderSubApp } from './hooks/useRenderSubApp.jsx';

import { Header } from './components/Header'

import './styles/App.css'

function App() {
    const [language, setLanguage] = useState('fr');
    const { currentApp, setCurrentApp } = useCurrentApp();
    const translations = useTranslations(language);
    const darkmodeBool = useDarkMode();
    const renderApp = useRenderSubApp(currentApp, translations, setCurrentApp, language);

    //const darkmodeBool = useRef(true);


    useEffect(() => { console.log(`app darkmodeBool ${darkmodeBool}`) }, [darkmodeBool])



    const sortedSubAppInfo = (translations && translations.subAppInfo) ? translations.subAppInfo.sort((a, b) => {
        if (a.appCode === 'home') return -1;
        if (b.appCode === 'home') return 1;

        return a.appName.localeCompare(b.appName);
    }) : [];

    return (
        <>
            <div className="App">
                {translations ? (
                    <>
                        <Header setApp={setCurrentApp} setLanguage={setLanguage} languageCode={language} t={sortedSubAppInfo} />
                        <div className='subApp-div'>
                            {renderApp({ darkmodeBool: darkmodeBool })}
                        </div>

                        <footer className="footer">
                            <small>{`© Joel Herranz ${new Date().getFullYear()}. ${translations.footer}`}</small>
                        </footer>
                    </>
                ) : (
                    <p>Loading translations...</p>
                )}
            </div>
        </>
    );
}

export default App
