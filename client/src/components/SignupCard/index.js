import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      emailInput: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.value;
    let name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log("Form was submitted");
  }

  render() {
    return (
      <div className="FormCenter">
        <h2> Sign Up</h2>
        <form onSubmit={this.handleSubmit} className="FormFields">
          <div className="FormField">
            <label className="FormField__Label" htmlFor="name">
              Enter Full Name
            </label>
            <input
              type="name"
              className="FormField__Input"
              placeholder="Enter your Full Name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="emailInput">
              Email
            </label>
            <input
              type="emailInput"
              className="FormField__Input"
              placeholder="Enter your Email"
              name="emailInput"
              value={this.state.emailInput}
              onChange={this.handleChange}
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
              value={this.state.password}
              onChange={this.handleChange}
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
    );
  }
}

export default SignUpForm;
