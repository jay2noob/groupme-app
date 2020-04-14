import React from 'react'
import EditProfileFrom from '../EditProfileForm'
import EditProfileImg from '../EditProfileImg'
import './styles.css'

function EditProfileCard() {
  return (
    <div className="edit-profile-card-container">
      <div className="edit-profile-card">
        <div className="edit-profile-heading">
          <h2>Personal Information</h2>
        </div>
        <EditProfileImg />
        <EditProfileFrom />
      </div>
    </div>
  )
}

export default EditProfileCard
