import React from 'react';
import { t } from '../i18n';
import { ComponentProps } from '../props';
import { TranslateContext } from './Translate';

export const T = (props: ComponentProps) => {
  return (
    <TranslateContext.Consumer>
      {({ langData }) => t(langData, props.children)}
    </TranslateContext.Consumer>
  );
};
