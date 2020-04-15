import React from 'react'
import ProfileUserCard from '../ProfileUserCard'
import ProfileInfoCard from '../ProfileInfoCard'
import ProfileTabContent from '../ProfileTabContent'
import './styles.css'

function ProfileCards() {
  return (
    <section className="profile-card-container">
      <ProfileUserCard />
      <ProfileTabContent />
      <ProfileInfoCard />
    </section>
  )
}

export default ProfileCards
