<<<<<<< HEAD
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
=======
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../src/common/global';
import theme from '../src/common/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
>>>>>>> 655a1dd8c6efa1753bc10a5273b5ceec1a86cb66
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
<<<<<<< HEAD
}
=======
};

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];
>>>>>>> 655a1dd8c6efa1753bc10a5273b5ceec1a86cb66
