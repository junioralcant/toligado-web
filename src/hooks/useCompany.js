import React, { createContext, useState, useContext } from 'react';

const CompanyContext = createContext();

export function TransactionProvider({ children }) {
  const [company, setCompany] = useState({});
  console.log(company);

  return (
    <CompanyContext.Provider value={{ company, setCompany }}>
      {children}
    </CompanyContext.Provider>
  );
}

export function useCompany() {
  const context = useContext(CompanyContext);

  return context;
}
