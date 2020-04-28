import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Search from "../Search";
import "./styles.css";

function Navbar({ auth: { user } }) {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-logo">
          <Link className="navbar-brand" to="/dashboard">
            Page Name
          </Link>
        </div>
        <div className="navbar-search">
          <Search />
        </div>
        <div className="navbar-list">
          <ul className="navbar-ul">
            <li className="navbar-item">
              <Link className="navbar-link" to="/dashboard">
                Welcome, {user && user.name}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Navbar);
