import React, { useState, useEffect } from 'react'
import MyGroupsCard from './MyGroupsCard'
import Spinner from '../Spinner/Spinner'
import { getMyGroups } from '../../actions/group'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import './styles.css'

function MyGroupsContainer({ getMyGroups, myGroups }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getMyGroups()
    setLoading(false)
    if (myGroups) {
      console.log("myGroups Effect", myGroups)
    }
    // eslint-disable-next-line
  }, [])

  if(loading) {
    return <Spinner />
  } 

  console.log("myGroups", myGroups);
  
  return (
    <section className="mygroups-card-container">
      <h2 className="mygroups-heading">My Groups</h2>
      {!loading && myGroups.length === 0 ? (<h3>No Groups to show</h3>) : (
        myGroups.map(myGroup => <MyGroupsCard myGroup={myGroup} key={myGroup._id} />)
      )}
    </section>
  )
}

MyGroupsContainer.propTypes = {
  myGroups: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  myGroups: state.group.myGroups
});

export default connect(mapStateToProps, { getMyGroups })(MyGroupsContainer);
