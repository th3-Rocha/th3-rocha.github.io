import React, { createContext, useState, useEffect } from 'react';

import enTranslations from './en.json';
import itTranslations from './it.json';
import brTranslations from './br.json';
export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [translations, setTranslations] = useState(enTranslations);

  useEffect(() => {
    const userLanguage = navigator.language.split('-')[0];
    console.log(userLanguage);
    setLanguage(userLanguage);
    switch (userLanguage) {
      case 'br':
        setTranslations(enTranslations);
        break;
      case 'it':
        setTranslations(enTranslations);
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