import React from 'react'
import { Link } from "react-router-dom";
import './styles.css'

function SideNavbar() {
  return (
    <nav className="side-navbar">
      <div className="side-navbar_list">
        <ul className="side-navbar_ul">
          <li className="side-navbar_item">
            <Link className="side-navbar_link" to="/dashboard">
              <i className="far fa-home"></i>
            </Link>
          </li>
          <li className="side-navbar_item">
            <Link className="side-navbar_link" to="/profile">
              <i className="fas fa-user"></i>
            </Link>
          </li>
          <li className="side-navbar_item">
            <Link className="side-navbar_link" to="/create">
              <i className="fal fa-plus"></i>
            </Link>
          </li>
          <li className="side-navbar_item">
            <Link className="side-navbar_link" to="/groups">
              <i className="fas fa-users"></i>
            </Link>
          </li>
          <li className="side-navbar_item">
            <Link className="side-navbar_link" to="/events">
              <i className="fal fa-calendar-alt"></i>
            </Link>
          </li>
          <li className="side-navbar_item">
            <Link className="side-navbar_link" to="/signout">
              <i className="fal fa-sign-out-alt"></i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default SideNavbar