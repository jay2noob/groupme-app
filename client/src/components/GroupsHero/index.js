import React from 'react'
import './styles.css'

function GroupsHero() {
  return (
    <section className="groups-hero-container">
      <div className="groups-hero-card">
        <div className="groups-hero-img-container">
          <div className="groups-hero-img-inner"> 
            <img className="groups-hero-img" src="../images/coverphoto.png" alt=""/>
            <div className="groups-hero-content">
              <h2 className="groups-hero-heading">My Group Name</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GroupsHero