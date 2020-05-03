import React, { Fragment } from 'react'
import SideNavbar from '../components/SideNavbar'
import Navbar from '../components/Navbar'
import UsersContainer from '../components/Users/index'

 function Users() {
  return (
    <Fragment>
      <header>
        <SideNavbar />
        <Navbar />
      </header>
      <UsersContainer />
    </Fragment>
  )
}

export default Users