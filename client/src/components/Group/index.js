import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getGroup } from '../../actions/group'
import { getPosts } from '../../actions/post'
import { connect } from "react-redux";
import PropTypes from "prop-types";

import GroupPost from './GroupPost'
import CreatePostCard from './CreatePostCard'
import GroupHero from './GroupHero'
import './styles.css'

function GroupsContainer({ getGroup, currentGroup, getPosts, post: {posts}}) {
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(0);
  const [nextPage, setNextPage] = useState(false);

  let { id } = useParams();

  useEffect(() => {
    getGroup(id)
    getPosts({ page })
    setLoading(false);
    
    const onScroll = (e) => {
      const windowHeight =
        "innerHeight" in window
          ? window.innerHeight
          : document.documentElement.offsetHeight;
      const body = document.body;
      const html = document.documentElement;
      const docHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );
      const windowBottom = windowHeight + window.pageYOffset;
      if (windowBottom >= docHeight && !nextPage) {
        setNextPage(true);
        setTimeout(async () => {
          const updatePage = page + 1;
          console.log("Bottom Reached", updatePage);
          getPosts({ page: updatePage });
          setPage(updatePage);
          setNextPage(false);
        }, 1000);
      } else {
        console.log("Not Yet");
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
    
    // eslint-disable-next-line
  }, [])

  return (
    <section className="groups-card-container">
      <GroupHero currentGroup={currentGroup || {}} />
      <CreatePostCard />
      {posts && posts.length === 0 ? (
        <h3>No posts to show</h3>
      ) : (
        posts.map(post => (
          <GroupPost post={post} key={post._id} />
        ))
      )}
    </section>
  )
} 

GroupsContainer.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  currentGroup: PropTypes.object.isRequired,
  isJoined: PropTypes.bool
};

const mapStateToProps = (state) => ({
  currentGroup: state.group.currentGroup || {},
  isJoined: state.isJoined,
  post: state.post
});

export default connect(mapStateToProps, { getGroup, getPosts })(GroupsContainer);
