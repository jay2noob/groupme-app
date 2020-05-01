import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getPosts } from "../../actions/post";
import GroupComment from "./GroupComment";
import "./styles.css";

function GroupPost({ getPosts, post: { posts, loading } }) {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <div className="groups-post-container">
      <div className="groups-post-card">
        <div className="groups-post-top">
          <div className="groups-post-img-container">
            <img
              className="groups-post-img"
              src="../images/portrait.png"
              alt=""
            />
          </div>
          <div className="groups-post-info">
            <Link to="/profile">
              <h6 className="groups-post-heading">USERNAME</h6>
            </Link>
            <p className="groups-post-time">Just now</p>
          </div>
        </div>

        <div className="groups-post-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla
            dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus
            mollis pharetra. Proin blandit ac massa sed rhoncus
          </p>
        </div>

        <div className="groups-post-reaction">
          <Link to="/groups">
            <i className="fal fa-thumbs-up"></i>
          </Link>
          <p className="groups-post-reaction-stat">150 likes</p>
        </div>

        <div className="groups-post-comments">
          <GroupComment />
        </div>
      </div>

      <div className="groups-post-card">
        <div className="groups-post-top">
          <div className="groups-post-img-container">
            <img
              className="groups-post-img"
              src="../images/portrait.png"
              alt=""
            />
          </div>
          <div className="groups-post-info">
            <Link to="/profile">
              <h6 className="groups-post-heading">USERNAME</h6>
            </Link>
            <p className="groups-post-time">Just now</p>
          </div>
        </div>

        <div className="groups-post-body">
          <img src="../images/coverphoto.png" alt="" />
        </div>

        <div className="groups-post-reaction">
          <Link to="/groups">
            <i className="fal fa-thumbs-up"></i>
          </Link>
          <p className="groups-post-reaction-stat">150 likes</p>
        </div>

        <div className="groups-post-comments">
          <GroupComment />
        </div>
      </div>
    </div>
  );
}

GroupPost.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(GroupPost);
