import React, { Fragment } from "react";
import WelcomeNavbar from "../components/WelcomeNavbar";
import Alert from "../Alert";
import LoginForm from "../components/auth/LoginCard";

function login() {
  return (
    <Fragment>
      <WelcomeNavbar />
      <Alert />
      <LoginForm />
    </Fragment>
  );
}

export default login;
