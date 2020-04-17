import React from 'react'
import EventCard from '../EventCard'
import EventCover from '../EventCover'
import './styles.css'

function EventsContainer() {
  return (
    <section className="events-container">
      <EventCover />

      <EventCard />
    </section>

  )
}

export default EventsContainer 