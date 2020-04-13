import React, { Fragment } from 'react'
import SideNavbar from '../components/SideNavbar'
import Navbar from '../components/Navbar'
import ProfileCards from '../components/ProfileCards'

 function Profile() {
  return (
    <Fragment>
      <SideNavbar />
      <Navbar />
      <ProfileCards />
    </Fragment>
  )
}

export default Profile