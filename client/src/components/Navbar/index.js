import React from 'react'
import { Link } from "react-router-dom";
import Search from '../Search'
import './styles.css'

function Navbar(props) {
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
                Welcome, USERNAME
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
