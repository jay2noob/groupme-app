import React, { Fragment } from 'react'
import Navbar from '../components/Navbar'
import SideNavbar from '../components/SideNavbar'
import MyEventsContainer from '../components/MyEvents/index'

function MyEvents() {
  return (
    <Fragment>
      <header>
        <SideNavbar />
        <Navbar />
      </header>
      <MyEventsContainer />
    </Fragment>
  )
}


export default MyEvents