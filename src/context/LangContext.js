import React, { createContext, useState } from 'react';

const LangContext = createContext();

export const LangContextProvider = ({ children }) => {
  const [lang, setLang] = useState('tr-TR');

  const values = {
    lang,
    setLang,
  };

  return <LangContext.Provider value={values}>{children}</LangContext.Provider>;
};

export default LangContext;
