import React from 'react'
import ProfileUserCard from './ProfileUserCard'
import ProfileInfoCard from './ProfileInfoCard'
import './styles.css'

function ProfileContainer() {
  return (
    <section className="profile-card-container">
      <ProfileUserCard />
      <ProfileInfoCard />
    </section>
  )
}

export default ProfileContainer
