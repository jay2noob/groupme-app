import React, { Fragment } from 'react'
import SideNavbar from '../components/SideNavbar'
import Navbar from '../components/Navbar'
import GroupsHero from '../components/GroupsHero'
import GroupsContainer from '../components/GroupsContainer'

 function Groups() {
  return (
    <Fragment>
      <header>
        <SideNavbar />
        <Navbar />
      </header>
        <GroupsHero />
        <GroupsContainer />
    </Fragment>
  )
}

export default Groups