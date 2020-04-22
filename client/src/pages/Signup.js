import React, { Fragment } from "react";
import WelcomeNavbar from "../components/WelcomeNavbar";
import SignUpForm from "../components/auth/SignupCard";

function SignUp() {
  return (
    <Fragment>
      <WelcomeNavbar />
      <SignUpForm />
    </Fragment>
  );
}

export default SignUp;
