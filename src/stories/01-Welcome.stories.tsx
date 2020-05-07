import React from 'react';
import { Welcome } from '@storybook/react/demo';

export default {
  title: 'Welcome',
  component: Welcome
};

export const ToStorybook = () => (
  <>
    <h1>Hello</h1>
  </>
);

ToStorybook.story = {
  name: 'to Storybook'
};
