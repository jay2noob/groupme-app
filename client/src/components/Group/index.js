import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getGroup } from '../../actions/group'
import { connect } from "react-redux";
import PropTypes from "prop-types";

import GroupPost from './GroupPost'
import CreatePostCard from './CreatePostCard'
import GroupHero from './GroupHero'
import Spinner from '../Spinner/Spinner'
import './styles.css'

function GroupsContainer({ getGroup, currentGroup }) {
  const [loading, setLoading] = useState(true)
  let { id } = useParams();

  useEffect(() => {
    getGroup(id)
    setLoading(false)
    if (currentGroup) {
      console.log("group Effect", currentGroup)
    }
    // eslint-disable-next-line
  }, [])

  if(loading) {
    return <Spinner />
  } 

  console.log("currentGroup", currentGroup);

  return (
    <section className="groups-card-container">
      <GroupHero currentGroup={currentGroup || {}} />
      <CreatePostCard />
      <GroupPost />
    </section>
  )
}

GroupsContainer.propTypes = {
  currentGroup: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  currentGroup: state.group.currentGroup || {}
});

export default connect(mapStateToProps, { getGroup })(GroupsContainer);
