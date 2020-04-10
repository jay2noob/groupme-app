import React from 'react'
import { Link } from "react-router-dom";
import './styles.css'

function DashboardNavbar() {
  return (
    <nav className="dashboard-navbar">
      <div className="dashboard-navbar_list">
        <ul className="dashboard-navbar_ul">
          <li className="dashboard-navbar_item">
            <Link className="dashboard-navbar_link" to="/">
              <i class="far fa-home"></i>
            </Link>
          </li>
          <li className="dashboard-navbar_item">
            <Link className="dashboard-navbar_link" to="/groups">
              <i class="fas fa-users"></i>
            </Link>
          </li>
          <li className="dashboard-navbar_item">
            <Link className="dashboard-navbar_link" to="/profile">
              <i class="fas fa-user"></i>
            </Link>
          </li>
          <li className="dashboard-navbar_item">
            <Link className="dashboard-navbar_link" to="/events">
              <i class="fal fa-calendar-alt"></i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default DashboardNavbar