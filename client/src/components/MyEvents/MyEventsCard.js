import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

function MyEventsCard() {
  return (
    <ul className="myevents-list">
      <li className="myevents-item">
        <div className="myevents-img-container">
          <img className="myevents-img" src="../images/coverphoto.png" alt=""/>
        </div>
        <div className="myevents-content">
          <h2>Group Name</h2>
          <h3 className="myevents-content-heading">Event title</h3>
          <h5>Event Location</h5>
          <p className="myevents-event-time">Sat, May 02, 2:00 PM</p>

          <Link to="/group/events/1">
            <button className="btn btn-secondary myevents-btn">View Event</button>
          </Link>  
        </div>
      </li>
    </ul>
  )
}


export default MyEventsCard