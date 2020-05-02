import React from "react";
import { Link } from "react-router-dom";
import GroupComment from "./GroupComment";
import Spinner from "../Spinner/Spinner";
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
          <Link to="/groups">
            <i className="fal fa-thumbs-up like-btn"></i>
          </Link>
          <p className="groups-post-reaction-stat">{post.likes.length}</p>
        </div>

        <div className="groups-post-comments">
          <GroupComment />
        </div>
      </div>

    </div>
  );                                                                                                                                 
}
;

export default GroupPost;
