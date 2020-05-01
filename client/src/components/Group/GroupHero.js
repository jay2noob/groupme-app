import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import { IMAGE_URL } from '../../utils/setAuthToken';
import { connect } from "react-redux";
import { joinGroup } from "../../actions/group";
import PropTypes from "prop-types";


function GroupHero({ currentGroup, joinGroup, isJoined }) {
  console.log("currentGroup", currentGroup);
  
  let res = null;
  let url = null;
  if (currentGroup) {
    res = currentGroup.avatar && currentGroup.avatar.match(/^\/\//g);
    url = res == null ? `${IMAGE_URL}${currentGroup.avatar}` : currentGroup.avatar
  }

  const onJoin = (e) => {
    joinGroup({ id: currentGroup._id })
  }
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
            
            { isJoined ?
              <button onClick={onJoin} className="btn btn-primary group-hero-btn">
                Join Group
              </button>
              : null }
              
            <Link to={`/groups/events/${currentGroup._id}}`}>
              <button className="btn btn-secondary group-hero-btn">View Group Events</button>
            </Link>
            <Link to={`/create/event/${currentGroup._id}`}>
              <button className="btn btn-primary group-hero-btn">Create Event</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}



GroupHero.propTypes = {
  currentGroup: PropTypes.object.isRequired,
  isJoined: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isJoined: state.isJoined,
  currentGroup: state.group.currentGroup || {}
});

export default connect(mapStateToProps, { joinGroup })(GroupHero);