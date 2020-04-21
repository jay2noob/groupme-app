import React from 'react'
import EventCard from './EventCard'
import EventHero from './EventHero'
import './styles.css'

function EventsContainer() {
  return (
    <section className="events-container">
      <EventHero />
      <EventCard />
    </section>

  )
}

export default EventsContainer 