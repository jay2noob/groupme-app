import React from 'react'
import { Link } from "react-router-dom";
import './styles.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-logo">
          <Link className="navbar-brand" to="/">
            MyFamily
          </Link>
        </div>
        <div className="navbar-list">
          <ul className="navbar-ul">
            <li className="navbar-item">
              <Link className="navbar-link" to="/">
              <i className="fal fa-home-alt"></i> Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link className="navbar-link" to="/portfolio">
              <i className="fal fa-briefcase"></i> Portfolio
              </Link>
            </li>
            <li className="navbar-item">
              <Link className="navbar-link" to="/contact">
              <i className="fal fa-address-card"></i> Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
