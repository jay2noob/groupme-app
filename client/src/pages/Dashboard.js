import React, { Fragment } from 'react'
import DashboardNavbar from '../components/DashboardNavbar'
import SideNavbar from '../components/SideNavbar'
import DashboardCards from '../components/DashboardCards'


function Dashboard() {
  return (
    <Fragment>
      <header>
        <DashboardNavbar />
        <SideNavbar />
      </header>
      
      <DashboardCards />
    </Fragment>
  )
}


export default Dashboard