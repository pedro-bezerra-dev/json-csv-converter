import { ThemeProvider } from 'styled-components';

import { Home } from './pages/Home';

import { theme, GlobalStyle } from './styles/globals';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}
