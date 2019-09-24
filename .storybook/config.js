import React from 'react';

import { configure, addDecorator } from '@storybook/react';

import { addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import { ThemeProvider, CSSReset, Flex } from '@chakra-ui/core';
import { MemoryRouter } from 'react-router-dom';
import theme from '../src/theme';

import './styles.scss';
const req = require.context('../src/components', true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

const AppProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <MemoryRouter>{children}</MemoryRouter>
    </ThemeProvider>
  );
};

addDecorator(story => <AppProvider>{story()}</AppProvider>);

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
});

configure(loadStories, module);
