import React, { Fragment } from 'react'
import SideNavbar from '../components/SideNavbar'
import Navbar from '../components/Navbar'
import GroupsContainer from '../components/Group/index'
import { connect } from "react-redux";
import PropTypes from "prop-types";

function Groups({ location }) {
  const group = location.group;
  console.log("Group Details", group)

  return (
    <Fragment>
      <header>
        <SideNavbar />
        <Navbar />
      </header>
        <GroupsContainer group={group}/>
    </Fragment>
  )
}

Groups.propTypes = {
  isAdmin: PropTypes.bool,
  currentGroup: PropTypes.object
};

const mapStateToProps = (state) => ({
  isAdmin: state.isAdmin,
  currentGroup: state.group
});

export default connect(mapStateToProps)(Groups);
