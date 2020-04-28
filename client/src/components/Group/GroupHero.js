import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import { IMAGE_URL } from '../../utils/setAuthToken';


function GroupHero({ currentGroup }) {
  console.log("currentGroup", currentGroup);
  var res = currentGroup.avatar && currentGroup.avatar.match(/^\/\//g);
  const url = res == null ? `${IMAGE_URL}${currentGroup.avatar}` : currentGroup.avatar;

  return (
    <section className="groups-hero-container">
      <div className="groups-hero-card">
        <div className="groups-hero-img-container">
          <img className="groups-hero-img" src={url} alt=""/>
        </div>
        <h2 className="groups-hero-group-name">{currentGroup.name}</h2>
        <div className="groups-hero-content">

          <ul className="groups-hero-content-list">
            <li className="groups-hero-content-item">
              <h4 className="groups-hero-content-stat-heading">Posts</h4>
              <p className="groups-hero-content-stat">{ currentGroup.posts && currentGroup.posts.length }</p>
            </li>
            <li className="groups-hero-content-item">
              <h4 className="groups-hero-content-stat-heading">Members</h4>
              <p className="groups-hero-content-stat">{currentGroup.members && currentGroup.members.length}</p>
            </li>
            <li className="groups-hero-content-item">
              <h4 className="groups-hero-content-stat-heading">Events</h4>
              <p className="groups-hero-content-stat">{currentGroup.events && currentGroup.events.length}</p>
            </li>
          </ul>
          <div className="groups-hero-content-buttons">
            <Link to="/join">
              <button className="btn btn-primary group-hero-btn">Join Group</button>
            </Link>
            <Link to="/group/events/1">
              <button className="btn btn-secondary group-hero-btn">View Group Events</button>
            </Link>
            <Link to="/create/event">
              <button className="btn btn-primary group-hero-btn">Create Event</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}


export default GroupHero;