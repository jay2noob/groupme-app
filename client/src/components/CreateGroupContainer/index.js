import React from 'react'
import CreateGroupForm from '../CreateGroupForm'
import './styles.css'

function CreateGroupContainer() {
  return (
    // Edit profile 
    <div className="edit-profile-card-container">
      <div className="edit-profile-card">
        <div className="edit-profile-heading">
          <h2>Create Group</h2>
        </div>
        <CreateGroupForm />
      </div>
    </div>
  )
}

export default CreateGroupContainer