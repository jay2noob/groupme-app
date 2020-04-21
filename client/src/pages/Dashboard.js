import React, { Fragment } from 'react'
import Navbar from '../components/Navbar'
import SideNavbar from '../components/SideNavbar'
import DashboardContainer from '../components/Dashboard/index'


function Dashboard() {
  return (
    <Fragment>
      <header>

        <SideNavbar />
        <Navbar />

      </header>

      <DashboardContainer />

    </Fragment>
  )
}


export default Dashboard