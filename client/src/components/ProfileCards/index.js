import React from 'react'
import ProfileUserCard from '../ProfileUserCard'
import ProfileInfoCard from '../ProfileInfoCard'
import './styles.css'

function ProfileCards() {
  return (
    <div className="profile-card-container">
      <ProfileUserCard />
      <ProfileInfoCard />
    </div>
  )
}

export default ProfileCards
