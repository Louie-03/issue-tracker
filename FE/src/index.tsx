import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
<<<<<<< HEAD
import theme from './common/theme';
import App from './App';
import GlobalStyles from './common/global';
=======
import theme from 'common/theme';
import GlobalStyles from 'common/global';
import App from './App';
>>>>>>> 655a1dd8c6efa1753bc10a5273b5ceec1a86cb66

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
