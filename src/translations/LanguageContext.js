import React, { createContext, useState, useEffect } from 'react';

import enTranslations from './en.json';
import itTranslations from './it.json';
import brTranslations from './br.json';


const STORAGE_KEY = 'lang';

const MAP = {
  en: enTranslations,
  it: itTranslations,
  pt: brTranslations,
  br: brTranslations,
  'pt-br': brTranslations,
};

function normalize(code) {
  return String(code || 'en').toLowerCase().replace('_', '-');
}

function getLangFromUrl() {
  try {
    if (typeof window === 'undefined') return undefined;
    const params = new URLSearchParams(window.location.search);
    const raw = params.get('lang');
    if (!raw) return undefined;
    const norm = normalize(raw);
    if (MAP[norm]) return norm;
    const base = norm.split('-')[0];
    if (MAP[base]) return base;
  } catch (_) { }
  return undefined;
}

function resolveInitialLanguage() {
  const fromUrl = getLangFromUrl();
  if (fromUrl) return fromUrl;

  if (typeof window !== 'undefined') {
    const saved = window.localStorage?.getItem(STORAGE_KEY);
    if (saved && (MAP[saved] || MAP[normalize(saved).split('-')[0]])) {
      return normalize(saved);
    }
  }

  return 'pt-br';
}

function translationsFor(lang) {
  const full = MAP[lang];
  if (full) return full;
  const base = normalize(lang).split('-')[0];
  return MAP[base] || enTranslations;
}

export const LanguageContext = createContext({
  language: 'en',
  translations: enTranslations,
  setLanguage: () => { },
});

export const LanguageProvider = ({ children }) => {
  const initialLang = resolveInitialLanguage();
  const [language, _setLanguage] = useState(initialLang);
  const [translations, setTranslations] = useState(() => translationsFor(initialLang));

  useEffect(() => {
    setTranslations(translationsFor(language));
  }, [language]);
  const setLanguage = (next) => {
    const norm = normalize(next);
    _setLanguage(norm);
    try {
      if (typeof window !== 'undefined') {
        window.localStorage?.setItem(STORAGE_KEY, norm);
        const url = new URL(window.location.href);
        url.searchParams.set('lang', norm);
        window.history.replaceState({}, '', url.toString());
      }
    } catch (_) {

    }
  };

  useEffect(() => {
    try {

      try {
        const params = new URLSearchParams(window.location.search);
        const urlLang = params.get('lang');
        if (urlLang) {
          const norm = normalize(urlLang);
          const saved = window.localStorage?.getItem(STORAGE_KEY);
          if (saved !== norm) {
            window.localStorage?.setItem(STORAGE_KEY, norm);
          }
        }
      } catch (_) { }

      const navLang = typeof navigator !== 'undefined' ? (navigator.language || navigator.userLanguage) : undefined;
      const navLangs = typeof navigator !== 'undefined' ? navigator.languages : undefined;
      const saved = typeof window !== 'undefined' ? window.localStorage?.getItem(STORAGE_KEY) : undefined;
      const fromUrl = getLangFromUrl();
      console.log('[i18n] url lang:', fromUrl, '| navigator.language:', navLang, '| navigator.languages:', navLangs);
      console.log('[i18n] saved preference:', saved, '| resolved language:', language);
    } catch (_) {

    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, translations, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};