import React from 'react'
// import { Link } from 'react-router-dom'
import './styles.css'

function ProfileInfoCard() {
  return (
    <div className="profile-info-container">
      <div className="profile-info-card">
        <div className="profile-info-heading">
          <h2>About</h2>
        </div>
        <div className="profile-info-content">
          <div className="info-grid-cards">

            <h3 className="profile-info-basic">Basic Information</h3>
            <div className="profile-info">
              <ul className="profile-info-list">
                <li className="profile-info-li">
                  <div className="profile-info-question"> 
                    <span className="profile-info-question_span">Birthday</span>
                  </div>
                  <div className="profile-info-answer">
                    <span className="profile-info-answer_span">June, 01 2000</span>
                  </div>
                </li>
              </ul>
            </div>
            <h3 className="profile-info-contact">Contact Information</h3>
            <div className="profile-info">

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfoCard
