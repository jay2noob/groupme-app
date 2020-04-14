import React from 'react'
import './styles.css'

function ProfileTabContent() {
  return (
    <div className="profile-tab-container">
      <div className="profile-tab-card">
        <div className="profile-tab-heading">
          <ul className="profile-tab-list">
            <li>
              <button>Posts</button>
            </li>
            <li>
              <button>About</button>
            </li>
            <li>
              <button>Likes</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProfileTabContent