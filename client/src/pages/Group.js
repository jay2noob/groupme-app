import React, { Fragment } from 'react'
import SideNavbar from '../components/SideNavbar'
import Navbar from '../components/Navbar'
import GroupHero from '../components/Group/GroupHero'
import GroupsContainer from '../components/Group/index'
import { connect } from "react-redux";
import PropTypes from "prop-types";

function Groups({ location, currentGroup }) {
  const group = location.group;
  console.log("Group Details", group)

  return (
    <Fragment>
      <header>
        <SideNavbar />
        <Navbar />
      </header>
        <GroupHero group={group} />
        <GroupsContainer />
    </Fragment>
  )
}

Groups.propTypes = {
  getGroup: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool,
  currentGroup: PropTypes.object
};

const mapStateToProps = (state) => ({
  isAdmin: state.isAdmin,
  currentGroup: state
});

export default connect(mapStateToProps)(Groups);
