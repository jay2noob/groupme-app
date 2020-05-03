import React, { Fragment } from 'react'
import SideNavbar from '../components/SideNavbar'
import Navbar from '../components/Navbar'
import ProfileContainer from '../components/Profile/index'

 function Profile() {
  return (
    <Fragment>
      <header>
        <SideNavbar />
        <Navbar />
      </header>
      <ProfileContainer />
    </Fragment>
  )
}

export default Profile