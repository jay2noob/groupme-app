import React, { useState, useEffect } from 'react'
import MyGroupsCard from './MyGroupsCard'
import Spinner from '../Spinner/Spinner'
import { getMyGroups } from '../../actions/group'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import './styles.css'

function MyGroupsContainer({ getMyGroups, myGroups }) {
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)

  useEffect(() => {
    getMyGroups({ page })
    setLoading(false)
    if (myGroups) {
      console.log("myGroups Effect", myGroups)
    }

    /// use debounce function to limit the number of requests sent to server if the user scrolls up and down too quiclky
    window.onscroll = () => {

      const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
      const body = document.body;
      const html = document.documentElement;
      const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
      const windowBottom = windowHeight + window.pageYOffset;
      if (windowBottom >= docHeight) {
        console.log("Bottom Reached")
        getMyGroups({ page: (page + 1) })
        setPage(page + 1)
      } else {
        console.log("Not Yet");
      }

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
      {!loading && myGroups && myGroups.length === 0 ? (<h3>No Groups to show</h3>) : (
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
