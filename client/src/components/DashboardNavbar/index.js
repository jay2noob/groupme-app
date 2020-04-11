import React from 'react'
import { Link } from "react-router-dom";
import Search from '../Search'
import './styles.css'

function DashboardNavbar(props) {
  return (
    <nav className="dashboard-navbar">
      <div className="dashboard-navbar-inner">
        <div className="dashboard-navbar-logo">
          <Link className="dashboard-navbar-brand" to="/">
            Dashboard
          </Link>
        </div>
        <div className="dashboard-navbar-search">
          <Search />
        </div>
        <div className="dashboard-navbar-list">
          <ul className="dashboard-navbar-ul">
            <li className="dashboard-navbar-item">
              <Link className="dashboard-navbar-link" to="/">
                Welcome, USERNAME
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default DashboardNavbar
