import React, { createContext, useContext, useReducer } from 'react';
import { useEffect } from 'react';

import { addCompany } from '../reducer/company/action';

import { companyReducer } from '../reducer/company/reducer';

const CompanyContext = createContext();

export function CompanyProvider({ children }) {
  const [companyState, dispatcher] = useReducer(
    companyReducer,
    {
      company: {},
    },
    () => {
      const storedCompanyAsJSON = localStorage.getItem(
        '@to-ligado:company-1.0.0'
      );

      if (storedCompanyAsJSON) {
        return { company: JSON.parse(storedCompanyAsJSON) };
      }
    }
  );

  const { company } = companyState;

  useEffect(() => {
    return () => {};
  }, []);

  async function setCompanyDate(company) {
    const companyJSON = JSON.stringify(company);

    localStorage.setItem('@to-ligado:company-1.0.0', companyJSON);

    dispatcher(addCompany(company));
  }

  return (
    <CompanyContext.Provider value={{ company, setCompanyDate }}>
      {children}
    </CompanyContext.Provider>
  );
}

export function useCompanyContext() {
  const context = useContext(CompanyContext);

  return context;
}
