import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}

  html {
    font-family: Noto Sans KR;
    font-size: 10px;
  }

  a {
    text-decoration:none;
  }

  * {
      box-sizing:border-box;
      outline:none;
      border:none;
  }
`;

export default GlobalStyles;
