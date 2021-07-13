import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from './styles/globals';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        Hello World
      </div>
    </ThemeProvider>
  );
}
