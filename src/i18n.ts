import ky from 'ky';
import g from 'lodash.get';

const langs = {};

interface TranslateProps {
  lang: string;
  key: string;
}

export const loadLanguage = lang => ky.get(`/i18n/${lang}.json`).json();

export const useTranslate = ({ lang, key }: TranslateProps) => {
  return 'langs[lang][key]';
};

export const t = (data, key) => g(data, key, key);
