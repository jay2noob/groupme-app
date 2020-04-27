import React from 'react'
import './styles.css'
import GroupPost from './GroupPost'
import CreatePostCard from './CreatePostCard'
import GroupHero from './GroupHero'

function GroupsContainer() {
  return (
    <section className="groups-card-container">
      <GroupHero />
      <CreatePostCard />
      <GroupPost />
    </section>
  )
}

export default GroupsContainer
