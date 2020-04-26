import React from 'react'
import './styles.css'
import GroupHero from './GroupHero'
import GroupPost from './GroupPost'
import CreatePostCard from './CreatePostCard'

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
