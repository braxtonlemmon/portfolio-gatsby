import React from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from './src/components/layout';
import { GlobalStyle, theme } from './src/theme/GlobalStyle';
import { ViewportProvider } from './src/components/ViewportProvider';

export const wrapRootElement = ({ element }) => (
  <ViewportProvider>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>{element}</Layout>
    </ThemeProvider>
  </ViewportProvider>
)

