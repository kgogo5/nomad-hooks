import React from "react";
import { useUser } from "./context";

const Header = () => {
  const { user } = useUser();

  return (
    <header>
      <a href="#">Home</a>
      <br />
      Hello, {user.loggedIn ? user.name : null} you are{" "}
      {user.loggedIn ? "logIn" : "not login"}
      <br />
    </header>
  );
};

export default Header;
