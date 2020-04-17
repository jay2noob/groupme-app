import React, { Fragment } from 'react'
import Navbar from '../components/Navbar'
import SideNavbar from '../components/SideNavbar'
import EditProfileContainer from '../components/EditProfileContainer'

function EditProfile() {
  return (
    <Fragment>
      <header>
        <SideNavbar />
        <Navbar />
      </header>
      <EditProfileContainer />
    </Fragment>
  )
}

export default EditProfile
