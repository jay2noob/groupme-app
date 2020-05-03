import React from 'react'
import { connect } from "react-redux";
import { joinEvent } from "../../actions/event";
import PropTypes from "prop-types";
import './styles.css'

function EventHero({ currentEvent, joinEvent, isGoing }) {
  return (
    <section className="events-hero-container">
      <div className="events-hero-card">
        <div className="events-hero-content">
          <h2 className="events-hero-heading">Group Events</h2>
        </div>
      </div>
    </section>
  )
}


EventHero.propTypes = {
  currentEvent: PropTypes.object.isRequired,
  isGoing: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isGoing: state.isGoing,
  currentEvent: state.group.currentEvent || {}
});

export default connect(mapStateToProps, { joinEvent })(EventHero);
