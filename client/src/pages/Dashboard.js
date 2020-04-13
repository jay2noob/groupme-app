import React, { Fragment } from 'react'
import Navbar from '../components/Navbar'
import SideNavbar from '../components/SideNavbar'
import DashboardCards from '../components/DashboardCards'


function Dashboard() {
  return (
    <Fragment>
      <header>

        <SideNavbar />
        <Navbar />

      </header>

      <DashboardCards />

    </Fragment>
  )
}


export default Dashboard