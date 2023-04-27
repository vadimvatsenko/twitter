import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import GlobalStyle from 'utils/Global.styles';
import './fonts.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/twitter'>
      <App />
    </BrowserRouter>
    <GlobalStyle />
  </React.StrictMode>
);
