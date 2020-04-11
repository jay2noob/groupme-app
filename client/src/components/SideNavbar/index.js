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
              <i class="far fa-home"></i>
            </Link>
          </li>
          <li className="side-navbar_item">
            <Link className="side-navbar_link" to="/profile">
              <i class="fas fa-user"></i>
            </Link>
          </li>
          <li className="side-navbar_item">
            <Link className="side-navbar_link" to="/create">
              <i class="fal fa-plus"></i>
            </Link>
          </li>
          <li className="side-navbar_item">
            <Link className="side-navbar_link" to="/groups">
              <i class="fas fa-users"></i>
            </Link>
          </li>
          <li className="side-navbar_item">
            <Link className="side-navbar_link" to="/events">
              <i class="fal fa-calendar-alt"></i>
            </Link>
          </li>
          <li className="side-navbar_item">
            <Link className="side-navbar_link" to="/signout">
              <i class="fal fa-sign-out-alt"></i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default SideNavbar