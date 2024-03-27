import React, { createContext, useState, useEffect } from 'react';

import enTranslations from './en.json';
import esTranslations from './en.json';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [translations, setTranslations] = useState(enTranslations);

  useEffect(() => {
    const userLanguage = navigator.language.split('-')[0];
    setLanguage(userLanguage);
    switch (userLanguage) {
      case 'es':
        setTranslations(esTranslations);
        break;
      case 'en':
      default:
        setTranslations(enTranslations);
        break;
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};