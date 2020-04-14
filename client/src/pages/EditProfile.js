import React, { Fragment } from 'react'
import Navbar from '../components/Navbar'
import SideNavbar from '../components/SideNavbar'
import EditProfileCard from '../components/EditProfileCard'

function EditProfile() {
  return (
    <Fragment>
      <header>
        <SideNavbar />
        <Navbar />
      </header>
      <EditProfileCard />
    </Fragment>
  )
}

export default EditProfile
