import React, { Fragment } from "react";
import WelcomeNavbar from "../components/WelcomeNavbar";
import Alert from "../Alert";
import SignUpForm from "../components/auth/SignupCard";

function SignUp() {
  return (
    <Fragment>
      <WelcomeNavbar />
      <Alert />
      <SignUpForm />
    </Fragment>
  );
}

export default SignUp;
