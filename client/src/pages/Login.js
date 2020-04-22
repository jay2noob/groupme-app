import React, { Fragment } from "react";
import WelcomeNavbar from "../components/WelcomeNavbar";
import LoginForm from "../components/auth/LoginCard";

function login() {
  return (
    <Fragment>
      <WelcomeNavbar />
      <LoginForm />
    </Fragment>
  );
}

export default login;
