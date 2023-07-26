import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './common/style/global.js';
import { AllRoutes } from './routes/AllRoutes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AllRoutes />
    <GlobalStyle />
  </React.StrictMode>,
)
