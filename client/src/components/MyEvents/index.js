import React, { useState, useEffect } from 'react'
import { getMyEvents } from '../../actions/event'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MyEventsCard from './MyEventsCard'
import Spinner from '../Spinner/Spinner'
import './styles.css'

function MyEventsContainer({ getMyEvents, myEvents }) {
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [nextPage, setNextPage] = useState(false)

  console.log(myEvents)

  useEffect(() => {
    if(myEvents.length === 0) {
      getMyEvents({ page })
    }

    setLoading(false)
    // use debounce function to limit the number of requests sent to server if the user scrolls up and down too quiclky
    const onScroll = e => {
      const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight
      const body = document.body
      const html = document.documentElement
      const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight)
      const windowBottom = windowHeight + window.pageYOffset
      if (windowBottom >= docHeight && !nextPage) {
        setNextPage(true)
        setTimeout(async () => {
          const updatePage = page + 1
          console.log("Bottom Reached", updatePage);
          getMyEvents({ page: updatePage })
          setPage(updatePage)
          setNextPage(false)
        }, 1000)
      } else {
        console.log("Not Yet")
      }
    }
    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [myEvents, getMyEvents, nextPage, page])

  return (
    <section className="myevents-card-container">
      <h2 className="myevents-heading">My Events</h2>
      { loading ? <Spinner /> : null }
      {!loading && myEvents && myEvents.length === 0 ? (<h3>No Events to show</h3>) : (
        myEvents.map(myEvent => <MyEventsCard myEvent={myEvent} key={myEvent._id} />)
      )}
    </section>
  )
}

MyEventsContainer.propTypes = {
  getMyEvents: PropTypes.func,
  myEvents: PropTypes.array
}

const mapStateToProps = (state) => ({
  myEvents: state.group.myEvents
})

export default connect(mapStateToProps, { getMyEvents })(MyEventsContainer);