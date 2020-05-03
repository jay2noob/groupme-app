import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

function WelcomeNavbar() {
  return (
    <nav className="welcome">
      <div className="welcome-inner">
        <div className="welcome-logo">
          <Link className="welcome-brand" to="/">
            Welcome
          </Link>
        </div>
        <ul className="welcome-ul">
          <li className="welcome-item"><Link className="welcome-link" to="/signup">SignUp</Link></li>
          <li className="welcome-item"><Link className="welcome-link" to="/login"> LogIn</Link></li>
        
        </ul>
      </div>
    </nav>
  )
}




export default WelcomeNavbar
