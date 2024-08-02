import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    shadow: Shadow;
  }

  interface PaletteOptions {
    shadow?: Shadow;
  }

  interface Shadow {
    shadow: string;
  }
}

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 990,
      lg: 1440,
      xl: 1920,
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#e7e7e7',
    },
    secondary: {
      main: '#f0f0f0',
      light: '#e3e3e3',
    },
    background: {
      default: '#FFFFFF',
      paper: '#000',
    },
    shadow: { shadow: '5px 5px 20px 0 #0000001a' },
    text: {
      primary: '#1c1c27',
      secondary: '#adadad',
    },
    info: {
      main: '#FFFFFF',
    },
  },
  typography: {
    h1: {
      fontSize: 22,
      lineHeight: 1.1,
      letterSpacing: '0em',
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: 16,
      lineHeight: 1.4,
      letterSpacing: '0em',
      fontWeight: 600,
    },
    subtitle2: {
      fontSize: 14,
      lineHeight: 1.4,
      letterSpacing: '0em',
      fontWeight: 400,
    },
    button: {
      fontSize: 20,
      fontWeight: 600,
      lineHeight: 1,
      letterSpacing: '0.03em',
    },
  },
});

export default theme;
