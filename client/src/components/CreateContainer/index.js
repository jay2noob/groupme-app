import React from 'react'
import CreatePostCard from '../CreatePostCard'
import CreateEventCard from '../CreateEventCard'
import CreateGroupCard from '../CreateGroupCard'
import './styles.css'

function CreateContainer() {
  return (
    <div className="create-container">
      <CreateGroupCard />
      <CreatePostCard />
      <CreateEventCard />
    </div>
  )
}

export default CreateContainer
