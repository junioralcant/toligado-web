import React from 'react';

import Routes from './routes';
import GlobalStyles from './styles/global';
import 'react-toastify/dist/ReactToastify.css';
import { CompanyProvider } from './contexts/CompanyContext';

function App() {
  return (
    <CompanyProvider>
      <GlobalStyles />
      <Routes />
    </CompanyProvider>
  );
}

export default App;
