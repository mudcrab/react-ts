import ky from 'ky';
import g from 'lodash.get';

import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

export interface LanguageStoreState {
  languages: any;
  current: string;
  setLanguage?: (language: string) => void;
}

const store = createContext<LanguageStoreState>({
  languages: {},
  current: 'en'
});

const { Provider } = store;

export const LanguageStateProvider = ({ language = 'en', children }: { language: string; children: ReactNode }) => {
  const [languages, setLanguages] = useState<any>({});
  const [current, setCurrent] = useState(language);

  const setLanguage = (lang: string) => {
    if (!languages[lang]) {
      ky.get(`/i18n/${lang}.json`)
        .json()
        .then((l) =>
          setLanguages({
            ...languages,
            [lang]: l
          })
        );
    }

    setCurrent(lang);
  };

  useEffect(() => {
    setLanguage(language);
  }, []);

  return <Provider value={{ languages, current, setLanguage }}>{children}</Provider>;
};

export const useLanguageStore = () => useContext(store);

export const t = (str: string, params?: any) => {
  const { languages, current } = useLanguageStore();

  let s = g(languages[current], str, str);

  if (params) {
    Object.keys(params).forEach((p) => (s = s.replace(`{${p}}`, params[p])));
  }

  return s;
};

export const T = ({ children, params = {} }: { children: ReactNode; params?: any }) => {
  return <>{t(children as string, params)}</>;
};
