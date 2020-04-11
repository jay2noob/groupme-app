import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

function WelcomeNavbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-logo">
          <Link className="navbar-brand" to="/">
            Welcome
          </Link>
        </div>>
      </div>
    </nav>
  )
}

export default WelcomeNavbar
