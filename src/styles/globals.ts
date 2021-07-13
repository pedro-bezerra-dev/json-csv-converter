import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;
    background: ${(props) => props.theme.colors.background};
    font: 400 16px 'Roboto', sans-serif;
  }
`;

export const theme = {
  colors: {
    background: '#F8F8F8',
    primary: '#222A68',
    secondary: '#3F84E5',
  },
  text: {
    codeText: "500 16px 'Fira Code', monospace",
    title: "800 36px 'Roboto', sans-serif",
  },
};
