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
              <i className="far fa-home"></i>
            </Link>
          </li>
          <li className="side-navbar_item">
            <Link to="/profile" className="side-navbar_link">
              <i className="fas fa-user"></i>
            </Link>
          </li>
          <li className="side-navbar_item">
            <Link to="/groups" className="side-navbar_link">
              <i className="fas fa-users"></i>
            </Link>
          </li>
          <li className="side-navbar_item">
            <Link to="/events" className="side-navbar_link">
              <i className="fal fa-calendar-alt"></i>
            </Link>
          </li>
          <li className="side-navbar_item">
            <Link to="/" className="side-navbar_link">
              <i className="fal fa-sign-out-alt"></i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default SideNavbar