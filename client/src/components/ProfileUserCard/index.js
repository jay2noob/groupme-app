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
          <Link to="/groups">
            <button>Invite to a group</button> 
          </Link>
          <div className="user-grid-cards">
            <div className="profile-user-stats">
              <h3 className="profile-user-stats_heading">Posts</h3>
              <p className="profile-user-stats_para">150</p>
            </div>
            <div className="profile-user-stats">
              <h3 className="profile-user-stats_heading">Comments</h3>
              <p className="profile-user-stats_para">300</p>
            </div>
            <div className="profile-user-stats">
              <h3 className="profile-user-stats_heading">Likes</h3>
              <p className="profile-user-stats_para">1100</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileUserCard
