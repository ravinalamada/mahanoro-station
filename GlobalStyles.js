import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html, body {
        font-family: 'Roboto', Helvetica, sans-serif;
        font-size: 16px;
        margin: 0;
        padding: 0;

    fieldset {
      margin: 0;
      padding: 0;
    }

    button,
    input {
      cursor: pointer;

    }
  }

`;
