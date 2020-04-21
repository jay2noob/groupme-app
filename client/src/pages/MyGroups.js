import React, { Fragment } from 'react'
import Navbar from '../components/Navbar'
import SideNavbar from '../components/SideNavbar'
import MyGroupsContainer from '../components/MyGroups/index'

function MyGroups() {
  return (
    <Fragment>
      <header>
        <SideNavbar />
        <Navbar />
      </header>
      <MyGroupsContainer />
    </Fragment>
  )
}


export default MyGroups