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
                  <span className="profile-info-question_span">Birthday</span>
                  <span className="profile-info-answer_span">June, 01 2000</span>
                </li>
                <li className="profile-info-li">
                  <span className="profile-info-question_span">Gender</span>
                  <span className="profile-info-answer_span">Female</span>
                </li>
              </ul>
            </div>
            <h3 className="profile-info-contact">Contact Information</h3>
            <div className="profile-info">
              <ul className="profile-info-list">
                <li className="profile-info-li">
                  <span className="profile-info-question_span">Email</span>
                  <span className="profile-info-answer_span">myemail@nope.com</span>
                </li>
                <li className="profile-info-li">
                  <span className="profile-info-question_span">Phone</span>
                  <span className="profile-info-answer_span">440-555-5555</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfoCard
