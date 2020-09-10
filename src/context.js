import React from "react";

// 어플리케이션의 데이터 저장소
export const UserContext = React.createContext();

const UserContextProvider = ({ children }) => (
  <UserContext.Provider value={{ name: "KimSeungTae" }}>
    {children}
  </UserContext.Provider>
);

export default UserContextProvider;
