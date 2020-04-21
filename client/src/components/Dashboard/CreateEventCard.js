import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

function CreateEventCard() {
  return (
    <div className="create-event-card-container">
      <div className="create-event-card">
        <div className="create-event-content">
          <h2 className="create-event-heading">Create a new event</h2>
          <p className="create-event-para">Create an event to share and invite your group to.</p>
          <Link to='/create/event'>
            <button 
              className="btn btn-primary">
                Create Event
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CreateEventCard
