import React, { useState, useContext, createContext } from "react";

const LangContext = createContext();

const Lang = ({ defaultLang, children, translations }) => {
  const [lang, setLang] = useState(defaultLang);

  const hyperTranslate = (text) => {
    if (lang === defaultLang) {
      return text;
    } else {
      return translations[lang][text];
    }
  };

  return (
    <LangContext.Provider value={{ setLang, t: hyperTranslate }}>
      {children}
    </LangContext.Provider>
  );
};

// 언어 설정
export const useSetLang = (lang) => {
  const { setLang } = useContext(LangContext);
  return setLang;
};

// 언어 변경 펑션
export const useT = () => {
  const { t } = useContext(LangContext);
  return { t };
};

export default Lang;
