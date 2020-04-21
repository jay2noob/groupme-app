import React from 'react'
import './styles.css'

function EventHero() {
  return (
    <section className="events-hero-container">
      <div className="events-hero-card">
        <div className="events-hero-img-container">
          <div className="events-hero-img-inner"> 
            <img className="events-hero-img" src="../images/coverphoto.png" alt=""/>
            <div className="events-hero-content">
              <h2 className="events-hero-heading">Group Events</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventHero
