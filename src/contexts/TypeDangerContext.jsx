import React, { createContext, useContext, useReducer } from 'react';
import { addTypeDanger } from '../reducer/typeDanger/reducer/action';
import { typeDangerReducer } from '../reducer/typeDanger/reducer/reducer';

const TypeDangerContext = createContext();

export function TypeDangerProvider({ children }) {
  const [typeDangerState, dispatcher] = useReducer(
    typeDangerReducer,
    {
      typeDanger: {},
    },
    () => {
      const storedTypeDangerAsJSON = localStorage.getItem(
        '@to-ligado:type-danger-1.0.0'
      );

      if (storedTypeDangerAsJSON) {
        return { typeDanger: JSON.parse(storedTypeDangerAsJSON) };
      }

      return { typeDanger: {} };
    }
  );

  const { typeDanger } = typeDangerState;

  function handleTypeDangerApproved() {
    const typeDangerJSON = JSON.stringify({ approved: true });

    localStorage.setItem(
      '@to-ligado:type-danger-1.0.0',
      typeDangerJSON
    );

    const data = { approved: true };

    dispatcher(addTypeDanger(data));
  }

  function handleTypeDangerAnalyzed() {
    const typeDangerJSON = JSON.stringify({ analyzed: false });

    localStorage.setItem(
      '@to-ligado:type-danger-1.0.0',
      typeDangerJSON
    );

    const data = { analyzed: false };

    dispatcher(addTypeDanger(data));
  }

  function handleTypeDangerDisapproved() {
    const typeDangerJSON = JSON.stringify({ disapproved: true });

    localStorage.setItem(
      '@to-ligado:type-danger-1.0.0',
      typeDangerJSON
    );

    const data = { disapproved: true };

    dispatcher(addTypeDanger(data));
  }

  return (
    <TypeDangerContext.Provider
      value={{
        typeDanger,
        handleTypeDangerApproved,
        handleTypeDangerAnalyzed,
        handleTypeDangerDisapproved,
      }}
    >
      {children}
    </TypeDangerContext.Provider>
  );
}

export function useTypeDangerContext() {
  const context = useContext(TypeDangerContext);

  return context;
}
