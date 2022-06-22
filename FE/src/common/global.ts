import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}

  html {
    font-family: Noto Sans KR;
    font-size: 10px;
  }

<<<<<<< HEAD
=======
  textarea {
    font-family: Noto Sans KR;
  }

  input {
    font-family: Noto Sans KR;
  }

>>>>>>> 655a1dd8c6efa1753bc10a5273b5ceec1a86cb66
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
