import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

function EventCard() {
  return (
    <div className="event-grid-cards">
      <div className="event-card">
        <div className="event-top">
          <div className="event-img-container">
            <img className="event-img" src="../images/event-card.png" alt=""/>
            <Link 
              to="/edit-event"
              className="event-edit">
                <i className="fal fa-user-edit"></i>
            </Link>
          </div>
        </div>

        <div className="event-body"> 
          <div>
            <h3 className="event-heading">Event Title</h3>
            <h5>Event Location</h5>
            <p>Event Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. pharetra. Proin blandit ac massa sed rhoncus</p>
          </div>
          <div className="event-time">
            <p>Sat, May 02, 2:00 PM</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default EventCard