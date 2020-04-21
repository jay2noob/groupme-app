import React from 'react'
import './styles.css'

function GroupHero() {
  return (
    <section className="groups-hero-container">
      <div className="groups-hero-card">
        <div className="groups-hero-img-container">
          <img className="groups-hero-img" src="../images/coverphoto.png" alt=""/>
          <div className="groups-hero-content">
            <h2 className="groups-hero-heading">My Group Name</h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GroupHero