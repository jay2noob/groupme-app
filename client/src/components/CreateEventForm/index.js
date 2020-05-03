import React from 'react'
import CreateEventForm from './CreateEventForm'
import { Link } from 'react-router-dom'
import './styles.css'

function CreateEventFormContainer() {
  return (
    <div className="create-event-form-container">
      <div className="create-event-form-btn">
        <Link to="/dashboard">
          <button className="btn btn-primary btn-back">Go Back</button>
        </Link>
      </div>
      <div className="create-event-form">
        <div className="create-event-form-heading">
          <h2>Create Event</h2>
        </div>
        <CreateEventForm />
      </div>
    </div>
  )
}

export default CreateEventFormContainer