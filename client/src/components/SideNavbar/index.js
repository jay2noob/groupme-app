import React from 'react'
import { Link } from "react-router-dom";
import './styles.css'

function SideNavbar() {
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
            <Link to="/profile" className="side-navbar_link">
              <i className="fas fa-user" title="Profile"></i>
            </Link>
          </li>
          <li className="side-navbar_item">
            <Link to="/groups" className="side-navbar_link">
              <i className="fas fa-users" title="Groups"></i>
            </Link>
          </li>
          <li className="side-navbar_item">
            <Link to="/events" className="side-navbar_link">
              <i className="fal fa-calendar-alt" title="Events"></i>
            </Link>
          </li>
          <li className="side-navbar_item">
            <Link to="/" className="side-navbar_link">
              <i className="fal fa-sign-out-alt" title="Log Out"></i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default SideNavbar