import React, { Fragment } from 'react'
import Navbar from '../components/Navbar'
import SideNavbar from '../components/SideNavbar'
import CreateContainer from '../components/CreateContainer'


function Dashboard() {
  return (
    <Fragment>
      <header>

        <SideNavbar />
        <Navbar />

      </header>

      <CreateContainer />

    </Fragment>
  )
}


export default Dashboard