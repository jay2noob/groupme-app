import React from 'react'
import { Link } from 'react-router-dom'
import CreateGroupForm from '../CreateGroupForm'
import './styles.css'

function CreateGroupFormContainer() {
  return (
    <div className="create-group-form-container">
      <div className="create-group-form-btn">
        <Link to="/dashboard">
          <button className="btn btn-primary btn-back">Go Back</button>
        </Link>
      </div>
      <div className="create-group-form">
        <div className="create-group-form-heading">
          <h2>Create Group</h2>
        </div>
        <CreateGroupForm />
      </div>
    </div>
  )
}

export default CreateGroupFormContainer