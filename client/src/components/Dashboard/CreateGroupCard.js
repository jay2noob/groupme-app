import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

function CreateGroupCard() {
  return (
    <div className="create-group-card-container">
      <div className="create-group-card">
        <div className="create-group-content">
          <h2 className="create-group-heading">Create a new group</h2>
          <p className="create-group-para">Create a group to start sharing memories with friends and family</p>
          <Link to='/create/group'>
            <button 
              className="btn btn-primary">
                Create Group
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CreateGroupCard