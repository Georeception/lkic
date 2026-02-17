import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFD700', // Light yellow
      light: '#FFE44D',
      dark: '#CCB100',
    },
    secondary: {
      main: '#000000', // Black
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
      dark: '#000000', // Added for dark sections like hero
    },
    text: {
      primary: '#000000',
      secondary: 'rgba(0, 0, 0, 0.7)',
      light: '#ffffff', // Added for light text on dark backgrounds
    },
  },
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    body1: {
      fontSize: '1.1rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
          padding: '12px 30px',
          textTransform: 'none',
          fontSize: '1.1rem',
        },
      },
    },
  },
});

export default theme; 