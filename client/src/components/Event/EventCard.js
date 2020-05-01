import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { joinEvent } from "../../actions/event";
import PropTypes from "prop-types";
import './styles.css'

function EventCard({ currentEvent, joinEvent, isGoing }) {
  const onJoin = (e) => {
    joinEvent({ id: currentEvent._id })
  }

  return (
    <div className="event-grid-cards">

      <div className="event-card">
        <div className="event-top">
          <div className="event-img-container">
            <img className="event-img" src="../../images/event-card.png" alt=""/>
            <Link 
              to="/edit-event"
              className="event-edit">
                <i className="fal fa-user-edit"></i>
            </Link>
          </div>
        </div>

        <div className="event-body"> 
          <div>
            <h3 className="event-heading">{currentEvent.title}</h3>
            <h5>{currentEvent.location}</h5>
            <p>{currentEvent.description}</p>
            { isGoing ?
              <button onClick={onJoin} className="btn btn-primary group-hero-btn">
                Going
              </button>
              : null }
          </div>
          <div className="event-time">
            <p>{currentEvent.date}</p>
          </div>
        </div>
        
      </div>

    </div>
  )
}

EventCard.propTypes = {
  currentEvent: PropTypes.object.isRequired,
  isGoing: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isGoing: state.isGoing,
  currentEvent: state.group.currentEvent || {}
});

export default connect(mapStateToProps, { joinEvent })(EventCard);