import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../../actions/alert";
import { register } from "../../../actions/auth";
import PropTypes from "prop-types";
import "./styles.css";

const SignUpForm = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <div className="FormCenter">
        <h2> Sign Up</h2>
        <form className="form" onSubmit={(e) => onSubmit(e)}>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="name">
              Enter Full Name
            </label>
            <input
              type="text"
              className="FormField__Input"
              placeholder="Enter your Full Name"
              name="name"
              value={name}
              onChange={(e) => onChange(e)}
              //required
            />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="emailInput">
              Email
            </label>
            <input
              type="email"
              className="FormField__Input"
              placeholder="Enter your Email"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              className="FormField__Input"
              placeholder="Enter your password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              className="FormField__Input"
              placeholder="Confirm your password"
              name="password2"
              value={password2}
              onChange={(e) => onChange(e)}
            />
          </div>

          <div className="FormField">
            <button className="FormField__Button mr-20">Sign Up</button>{" "}
            <Link to="/login" className="FormField__Link">
              I'm already member
            </Link>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

SignUpForm.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(SignUpForm);
