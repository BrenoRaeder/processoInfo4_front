import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './common/style/global.js';
import { AllRoutes } from './routes/AllRoutes.jsx';
import { UserProvider } from './contexts/UserContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <AllRoutes />
      <GlobalStyle />
    </UserProvider>
  </React.StrictMode>,
)
