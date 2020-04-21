import React from 'react'
import ProfileUserCard from './ProfileUserCard'
import ProfileInfoCard from './ProfileInfoCard'
import ProfileTabContent from './ProfileTabs'
import './styles.css'

function ProfileContainer() {
  return (
    <section className="profile-card-container">
      <ProfileUserCard />
      <ProfileTabContent />
      <ProfileInfoCard />
    </section>
  )
}

export default ProfileContainer
