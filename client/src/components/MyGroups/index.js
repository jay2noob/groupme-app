import React, { useState, useEffect } from 'react'
import MyGroupsCard from './MyGroupsCard'
import Spinner from '../Spinner/Spinner'
import { getMyGroups } from '../../actions/group'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import './styles.css'

function MyGroupsContainer({ getMyGroups }, props) {
  const [myGroups, setMyGroups] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getMyGroups()
    setLoading(false)
    // eslint-disable-next-line
  }, [])

  if(loading) {
    return <Spinner />
  } 

  return (
    <section className="mygroups-card-container">
      <h2 className="mygroups-heading">My Groups</h2>
      {!loading && myGroups.length === 0 ? (<h3>No Groups to show</h3>) : (
        myGroups.map(myGroup => <MyGroupsCard myGroups={myGroups} key={myGroup._id} />)
      )}
      <MyGroupsCard />
    </section>
  )
}

MyGroupsContainer.propTypes = {
  myGroups: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  myGroups: state.myGroups
});

export default connect(mapStateToProps, {  getMyGroups })(MyGroupsContainer);
