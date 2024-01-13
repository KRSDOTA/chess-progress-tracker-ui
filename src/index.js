import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#fb2f05',
    },
    secondary: {
      main: '#7e7e81',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Droid Sans',
    },
    h2: {
      fontFamily: 'Droid Sans',
    },
    h3: {
      fontFamily: 'Droid Sans'
    },
    button: {
      fontFamily: 'Droid Sans',
    },
    fontFamily: 'Droid Sans',
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
