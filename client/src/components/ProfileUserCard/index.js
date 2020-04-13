import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

function ProfileUserCard() {
  return (
    <div className="profile-user-container">
      <div className="profile-user-card">
        <div className="profile-user-img-container">
          <img className="profile-user-img" src="../images/portrait.png" alt=""/>
        </div>
        <div className="profile-user-content">
          <h2 className="profile-user-heading">USERNAME</h2>
          <Link to="/edit-user">
            <button>Edit Profile</button> 
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProfileUserCard
