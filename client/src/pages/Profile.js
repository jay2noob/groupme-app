import React, { Fragment } from 'react'
import SideNavbar from '../components/SideNavbar'
import Navbar from '../components/Navbar'
import ProfileCards from '../components/ProfileCards'

 function Profile() {
  return (
    <Fragment>
      <header>
        <SideNavbar />
        <Navbar />
      </header>
      <ProfileCards />
    </Fragment>
  )
}

export default Profile