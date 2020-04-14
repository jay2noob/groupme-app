import React from 'react'
import ProfileUserCard from '../ProfileUserCard'
import ProfileInfoCard from '../ProfileInfoCard'
import ProfileTabContent from '../ProfileTabContent'
import './styles.css'

function ProfileCards() {
  return (
    <div className="profile-card-container">
      <ProfileUserCard />
      <ProfileTabContent />
      <ProfileInfoCard />
    </div>
  )
}

export default ProfileCards
