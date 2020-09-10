import React, { useState, useContext } from "react";

// 어플리케이션의 데이터 저장소
const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Steve",
    loggedIn: false,
  });

  // 로그인
  const logUserIn = () =>
    setUser({
      ...user,
      loggedIn: true,
    });

  // 로그아웃
  const logUserOut = () =>
    setUser({
      ...user,
      loggedIn: false,
    });

  // Provider로 항상 상태요소들을 보내줘야 사용 할 수있다
  return (
    <UserContext.Provider value={{ user, fn: { logUserIn, logUserOut } }}>
      {children}
    </UserContext.Provider>
  );
};

// UserContext를 여러번 사용하지않기 위하여 사용.
export const useUser = () => {
  const { user } = useContext(UserContext);
  return { user };
};

export const useFns = () => {
  const { fn } = useContext(UserContext);
  return { fn };
};

export default UserContextProvider;
