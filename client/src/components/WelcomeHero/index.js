import React from 'react'
import { Link } from "react-router-dom"


function WelcomeHero() {
  return (
    <div className="welcome-container">
      <h1 className="x-large"> Fam App</h1>
      <p className="lead">
        Always Stay Connected With Your Family
      </p>
      <Link to="/signup">
        <button className="btn btn-primary">Singup</button>
      </Link>
      <Link to="/login">
        <button className="btn btn-secondary">Login</button>
      </Link>

    </div>
  )
}

export default WelcomeHero
