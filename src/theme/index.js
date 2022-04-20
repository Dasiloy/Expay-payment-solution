import { responsiveFontSizes } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import shadows from './shadow';
import { typography } from './typography';
import { components } from './components';
import { light, dark } from './palette';

const getTheme = (mode, themeToggler) =>
  responsiveFontSizes(
    createTheme({
      palette: mode === 'light' ? light : dark,
      shadows: shadows(mode),
      typography,
      zIndex: {
        appBar: 1200,
        drawer: 1300,
        modal: 1500,
      },
      components: components(mode),
      themeToggler,
    }),
  );

export default getTheme;
