import {createGlobalStyle} from 'styled-components';
import 'modern-normalize';

export const GlobalStyles = createGlobalStyle`
    body {
  font-family: sans-serif;
  font-size: 24px;
  line-height: 1.5;
  color: #212121;
  
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`