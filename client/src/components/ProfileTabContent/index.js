import React from 'react'
import './styles.css'

function ProfileTabContent() {
  return (
    <div className="profile-tab-container">
      <div className="profile-tab-card">
        <div className="profile-tab-heading">
          <ul className="profile-tab-list">
            <li>
              <button className="btn btn-primary tab-btn">Posts</button>
            </li>
            <li>
              <button className="btn btn-primary tab-btn">About</button>
            </li>
            <li>
              <button className="btn btn-primary tab-btn">Likes</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProfileTabContent