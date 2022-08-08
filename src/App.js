import React from 'react';

import Routes from './routes';
import GlobalStyles from './styles/global';
import 'react-toastify/dist/ReactToastify.css';
import { TransactionProvider } from './hooks/useCompany';

function App() {
  return (
    <TransactionProvider>
      <GlobalStyles />
      <Routes />
    </TransactionProvider>
  );
}

export default App;
