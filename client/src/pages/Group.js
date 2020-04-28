import React, { Fragment } from 'react'
import SideNavbar from '../components/SideNavbar'
import Navbar from '../components/Navbar'
import GroupsContainer from '../components/Group/index'

function Groups() {


  return (
    <Fragment>
      <header>
        <SideNavbar />
        <Navbar />
      </header>
        <GroupsContainer />
    </Fragment>
  )
}

export default Groups;
