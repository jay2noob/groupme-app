import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

// eslint-disable-next-line//
class LogInForm extends Component {
    constructor() {
        super();

        this.state = {
            emailInput: "",
            password: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.value;
        let name = target.name;

        this.setState({
            [name]: value 
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log(this.state);
    }

    render() {
        return (

            <div className="FormCenter"> 
            <h2>Log In</h2>
            <form onSubmit= {this.handleSubmit} className="FormFields">
            <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="emailInput" id="email" className="FormField__Input" placeholder="Enter your email" name="emailInput" value={this.state.emailInput} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20">log in</button> <Link to="/Signup" className="FormField__Link">Create an account</Link>
              </div>
            </form>
          </div>
        );
    }
}

export default LogInForm