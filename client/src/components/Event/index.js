import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getEvent } from '../../actions/event'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from '../Spinner/Spinner'
import EventCard from './EventCard'
import EventHero from './EventHero'
import './styles.css'

function EventsContainer({ getEvent, currentEvent }) {
  const [loading, setLoading] = useState(true)
  let { id } = useParams();

  useEffect(() => {
    getEvent(id)
    setLoading(false)
    if(currentEvent) {
      console.log(currentEvent)
    }
  }, [getEvent, id])

  if(loading) {
    return <Spinner />
  }
  return (
    <section className="events-container">
      <EventHero currentEvent={currentEvent || {}}/>
      <EventCard currentEvent={currentEvent || {}}/>
    </section>

  )
}

EventsContainer.propTypes = {
  currentEvent: PropTypes.object.isRequired,
  isGoing: PropTypes.bool

};

const mapStateToProps = (state) => ({
  currentEvent: state.group.currentEvent || {},
  isGoing: state.isGoing
});

export default connect(mapStateToProps, { getEvent })(EventsContainer);