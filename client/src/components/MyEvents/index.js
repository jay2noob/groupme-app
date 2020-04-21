import React from 'react'
import MyEventsCard from './MyEventsCard'

function MyEventsContainer() {
  return (
    <section className="myevents-card-container">
      <h2 className="myevents-heading">My Events</h2>
      <MyEventsCard />
    </section>
  )
}

export default MyEventsContainer