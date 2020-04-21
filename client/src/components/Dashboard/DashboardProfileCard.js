import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

function DashboardProfileCard() {
  return (
    <div className="dashboard-profile-container">
      <div className="dashboard-profile-card">
        <div className="dashboard-profile-img-container">
          <img className="dashboard-profile-img" src="../images/portrait.png" alt=""/>
        </div>
        <div className="dashboard-profile-content">
          <h2 className="dashboard-profile-heading">USERNAME</h2>
          <Link to="/profile/edit">
            <button 
              className="btn btn-primary">
                Edit Profile
            </button> 
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DashboardProfileCard
