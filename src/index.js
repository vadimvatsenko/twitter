import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import GlobalStyle from 'utils/Global.styles';
import './fonts.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>
);
