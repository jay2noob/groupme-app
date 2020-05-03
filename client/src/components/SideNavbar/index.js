import React, { useEffect } from "react";
import { getProfileById } from "../../actions/profile";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import "./styles.css";

const SideNavBar = ({ getProfileById, auth: {user} , logout }) => {

  // let { id } = useParams()

  // useEffect(() => {
  //   getProfileById(id)
  // }, [])

  return (
    <nav className="side-navbar">
      <div className="side-navbar_list">
        <ul className="side-navbar_ul">
          <li className="side-navbar_item">
            <Link to="/dashboard" className="side-navbar_link">
              <i className="far fa-home" title="Home"></i>
            </Link>
          </li>
          <li className="side-navbar_item">
            <Link to={`/profile`} className="side-navbar_link">
              <i className="fas fa-user" title="Profile"></i>
            </Link>
          </li>
          <li className="side-navbar_item">
            <Link to="/groups" className="side-navbar_link">
              <i className="fas fa-users" title="Groups"></i>
            </Link>
          </li>
          <li className="side-navbar_item">
            <Link to="/users" className="side-navbar_link">
              <i className="fal fa-search" title="Users"></i>
            </Link>
          </li>
          <li className="side-navbar_item">
            <Link to="/" onClick={logout} className="side-navbar_link">
              <i className="fal fa-sign-out-alt" title="Log Out"></i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

SideNavBar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: PropTypes.object.isRequired,
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { logout, getProfileById })(SideNavBar);
