import React from "react";
import { Link } from "react-router-dom";
// import GroupComment from "./GroupComment";
// import Spinner from "../Spinner/Spinner";
import "./styles.css";

function GroupPost({ post }) {

  return (
    <div className="groups-post-container">
      <div className="groups-post-card">
        <div className="groups-post-top">
          <div className="groups-post-img-container">
            <img
              className="groups-post-img"
              src={post.avatar}
              alt=""
            />
          </div>
          <div className="groups-post-info">
            <Link to="/profile">
              <h6 className="groups-post-heading">{post.name}</h6>
            </Link>
            <p className="groups-post-time">{post.date}</p>
          </div>
        </div>

        <div className="groups-post-body">
          <p>{post.text}</p>
        </div>

        <div className="groups-post-reaction">
          <button>
            <i className="fal fa-thumbs-up like-btn"></i>
          </button>
          <p className="groups-post-reaction-stat">{post.likes.length}</p>
        </div>

        <div className="groups-post-comments">
          {/* {console.log(post.comments)}
          {post.comments && post.comments.length === 0 ? (
          <h3>No comments to show</h3>
          ) : (
            post.comments.map(post => (
              <GroupComment comment={post.comments} key={post.comments._id} />
            ))
          )} */}

        </div>
      </div>

    </div>
  );                                                                                                                                 
}
;


export default GroupPost;
