import React from 'react'
import './styles.css'
import GroupPost from './GroupPost'
import CreatePostCard from './CreatePostCard'

function GroupsContainer() {
  return (
    <section className="groups-card-container">
      <CreatePostCard />
      <GroupPost />
    </section>
  )
}

export default GroupsContainer
