import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff9800',
    },
    secondary: {
      main: '#F50057',
    },
  },
});


//useContext start
const customColor = '#7b1fa2'
export const colorContext = createContext();

// useContextEnds

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <colorContext.Provider value={customColor}>
        <App />
      </colorContext.Provider>
    </ThemeProvider>
  </React.StrictMode>

);




