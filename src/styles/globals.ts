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
  }
`;

export const theme = {
  colors: {
    background: '#F8F8F8',
    primary: '#222A68',
    secondary: '#3F84E5',
  },
};
