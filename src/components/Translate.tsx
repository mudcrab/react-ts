import React, { createContext, useEffect, useState } from 'react';
import { useAsync } from 'react-async-hook';
import { loadLanguage } from '../i18n';
import { ComponentProps } from '../props';

export const TranslateContext = createContext({ lang: '', langData: {} });

export const Translate = (props: ComponentProps) => {
  const [lang, setLang] = useState('en');
  const [langData, setLangData] = useState();

  const data = useAsync(loadLanguage, [lang]);

  useEffect(() => {
    if (!data.loading) {
      setLangData(data.result as any);
    }
  });

  return data.loading ? (
    <div>asd</div>
  ) : (
    <TranslateContext.Provider value={{ lang, langData }}>{props.children}</TranslateContext.Provider>
  );
};
