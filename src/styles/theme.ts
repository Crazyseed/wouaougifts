import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    violet: {
      main: string;
      light: string;
      dark: string;
    };
    blueViolet: {
      main: string;
    };
    yellow: {
      main: string;
    };
    greenBlue: {
      main: string;
    };
    greyDark: {
      main: string;
    };
  }

  interface PaletteOptions {
    violet?: {
      main: string;
      light: string;
      dark: string;
    };
    blueViolet?: {
      main: string;
    };
    yellow?: {
      main: string;
    };
    greenBlue?: {
      main: string;
    };
    greyDark?: {
      main: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196F3',
    },
    secondary: {
      main: '#BBDEFB',
    },
    violet: {
      main: '#554C8B',
      light: '#7874A8',
      dark: '#322E54',
    },
    blueViolet: {
      main: '#4C648C',
    },
    yellow: {
      main: '#D4D400',
    },
    greenBlue: {
      main: '#4CA88C',
    },
    greyDark: {
      main: '#333333',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // 'Roboto, sans-serif', 'Arial', 'sans-serif'
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});

export const injectThemeVariables = () => {
  const root = document.documentElement;
  root.style.setProperty('--primary-color', theme.palette.primary.main);
  root.style.setProperty('--secondary-color', theme.palette.secondary.main);
  root.style.setProperty('--violet-main', theme.palette.violet.main);
  root.style.setProperty('--violet-light', theme.palette.violet.light);
  root.style.setProperty('--violet-dark', theme.palette.violet.dark);
  root.style.setProperty('--blue-violet', theme.palette.blueViolet.main);
  root.style.setProperty('--yellow', theme.palette.yellow.main);
  root.style.setProperty('--green-blue', theme.palette.greenBlue.main);
  root.style.setProperty('--greydark', theme.palette.greyDark.main);
  root.style.setProperty('--font-family', theme.typography.fontFamily ?? 'Roboto, sans-serif');

  console.log('Injected CSS Variables:', {
    '--primary-color': theme.palette.primary.main,
    '--secondary-color': theme.palette.secondary.main,
    '--violet-main': theme.palette.violet.main,
    '--violet-light': theme.palette.violet.light,
    '--violet-dark': theme.palette.violet.dark,
    '--blue-violet': theme.palette.blueViolet.main,
    '--yellow': theme.palette.yellow.main,
    '--green-blue': theme.palette.greenBlue.main,
    '--greydark': theme.palette.greyDark.main,
    '--font-family': theme.typography.fontFamily ?? 'Roboto, sans-serif',
  });




};

export default theme;