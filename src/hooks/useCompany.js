import React, { createContext, useState, useContext } from 'react';
import { useEffect } from 'react';

const CompanyContext = createContext();

export function TransactionProvider({ children }) {
  const [company, setCompany] = useState({});

  useEffect(() => {
    const storedCompanyAsJSON = localStorage.getItem(
      '@to-ligado:company-1.0.0'
    );

    if (storedCompanyAsJSON) {
      setCompany(JSON.parse(storedCompanyAsJSON));
    }
  }, []);

  async function setCompanyDate(company) {
    const companyJSON = JSON.stringify(company);

    localStorage.setItem('@to-ligado:company-1.0.0', companyJSON);

    setCompany(company);
  }

  return (
    <CompanyContext.Provider value={{ company, setCompanyDate }}>
      {children}
    </CompanyContext.Provider>
  );
}

export function useCompany() {
  const context = useContext(CompanyContext);

  return context;
}
