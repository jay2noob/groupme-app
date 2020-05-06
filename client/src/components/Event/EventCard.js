import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { joinEvent } from "../../actions/event";
import PropTypes from "prop-types";
import "./styles.css";

function EventCard({ currentEvent, joinEvent, isGoing, event }) {
  const onJoin = (e) => {
    joinEvent({ id: currentEvent._id });
  };
  console.log(currentEvent);
  return (
    <div className="event-grid-cards">
      <div className="event-card">
        <div className="event-top">
          <div className="event-img-container">
            <img
              className="event-img"
              src="../../images/event-card.png"
              alt=""
            />
            <Link to="/edit-event" className="event-edit">
              <i className="fal fa-user-edit"></i>
            </Link>
          </div>
        </div>

        <div className="event-body">
          <div>
            <h3 className="event-heading"></h3>
            <h5>Garfield Park</h5>
            <p>A cookout for friends and family</p>
            {isGoing ? (
              <button
                onClick={onJoin}
                className="btn btn-primary group-hero-btn"
              >
                Going
              </button>
            ) : null}
          </div>
          <div className="event-time">
            <p>Sat, May 2 2020</p>
          </div>
        </div>
      </div>

      <div className="event-card">
        <div className="event-top">
          <div className="event-img-container">
            <img
              className="event-img"
              src="../../images/event-card.png"
              alt=""
            />
            <Link to="/edit-event" className="event-edit">
              <i className="fal fa-user-edit"></i>
            </Link>
          </div>
        </div>

        <div className="event-body">
          <div>
            <h3 className="event-heading">Birthday Party</h3>
            <h5>Sam's House</h5>
            <p>A birthday celebaration for Joan</p>
            {isGoing ? (
              <button
                onClick={onJoin}
                className="btn btn-primary group-hero-btn"
              >
                Going
              </button>
            ) : null}
          </div>
          <div className="event-time">
            <p>Sat, May 9 2020</p>
          </div>
        </div>
      </div>
    </div>
  );
}

EventCard.propTypes = {
  currentEvent: PropTypes.object.isRequired,
  isGoing: PropTypes.bool,
  event: PropTypes.object,
};

const mapStateToProps = (state) => ({
  isGoing: state.isGoing,
  currentEvent: state.event.currentEvent || {},
  event: state.event,
});

export default connect(mapStateToProps, { joinEvent })(EventCard);
