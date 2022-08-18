import React from 'react';

import Routes from './routes';
import GlobalStyles from './styles/global';
import 'react-toastify/dist/ReactToastify.css';
import { CompanyProvider } from './contexts/CompanyContext';
import { TypeDangerProvider } from './contexts/TypeDangerContext';

function App() {
  return (
    <CompanyProvider>
      <GlobalStyles />
      <TypeDangerProvider>
        <Routes />
      </TypeDangerProvider>
    </CompanyProvider>
  );
}

export default App;
