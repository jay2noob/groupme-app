import React from 'react'
import { Link } from "react-router-dom"
import "./style.css"


function WelcomeHero() {
  return (
    <div className="welcome-container">
      <h1 className="x-large">GroupMe</h1>
      <p className="lead">
        Don't Be Left Out, Always Stay Connected
      </p>
      <div className="button">
      <Link to="/signup">
        <button className="btn btn-primary">SignUp</button>
      </Link>
    
      <Link to="/login" className="space">
        <button className="btn btn-secondary">LogIn</button>
      </Link>
      </div>
    </div>
  )
}

export default WelcomeHero
