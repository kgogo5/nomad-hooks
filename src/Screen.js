import React, { useContext } from "react";
import Header from "./Header";
import { useUser, useFns } from "./context";

const Screen = () => {
  const { user } = useUser();
  const { fn } = useFns();

  return (
    <div>
      <Header />
      <br />
      <button
        onClick={() =>
          user.loggedIn
            ? console.log(`login이 이미 되어있습니다`)
            : fn.logUserIn()
        }
      >
        logIn
      </button>
      <button
        onClick={() =>
          user.loggedIn
            ? fn.logUserOut()
            : console.log(`login이 되어 있지 않습니다`)
        }
      >
        logOut
      </button>
      <h1>First screen</h1>
    </div>
  );
};

export default Screen;
