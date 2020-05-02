import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";
import { addLike, removeLike, deletePost } from "../../actions/post";

import GroupComment from "./GroupComment";
// import Spinner from "../Spinner/Spinner";
import "./styles.css";

function GroupPost({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions,
}) {
  return (
    <div className="groups-post-container">
      <div className="groups-post-card">
        <div className="groups-post-top">
          <div className="groups-post-img-container">
            <img className="groups-post-img" src={avatar} alt="" />
          </div>
          <div className="groups-post-info">
            <Link to="/profile">
              <h6 className="groups-post-heading">{name}</h6>
            </Link>
            <p className="groups-post-time">
              <Moment format="YYYY/MM/DD">{date}</Moment>
            </p>
          </div>
        </div>

        <div className="groups-post-body">
          <p>{text}</p>
        </div>

        <div className="groups-post-reaction">
          <button onClick={(e) => addLike(_id)} type="button">
            <i className="fal fa-thumbs-up like-btn"></i>
            <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
          </button>
          <p className="groups-post-reaction-stat">{likes.length}</p>
        </div>

        <div className="groups-post-comments">
          {comments && comments.length === 0 ? (
            <h3>No comments to show</h3>
          ) : (
            comments.map((comments) => (
              <GroupComment comment={comments} key={comments._id} />
            ))
          )}{" "}
        </div>
      </div>
    </div>
  );
}
GroupPost.defaultProps = {
  showActions: true,
};

GroupPost.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  GroupPost
);
