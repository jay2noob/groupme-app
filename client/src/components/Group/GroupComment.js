import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./styles.css";

function GroupComment({
  postId,
  comment: { _id, text, name, avatar, user, date },
  auth,
}) {
  return (
    <div className="group-comment-top">
      <ul className="group-comments-post">
        <li className="group-comment-li">
          <div className="group-comment-img-container">
            <img className="group-comment-img" src={avatar} alt="" />
          </div>
          <div className="group-comment-info">
            <Link to="/profile">
              <h6 className="group-comment-heading">{name}</h6>
            </Link>
            <p className="group-comment-text">{text}</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
GroupComment.propTypes = {
  postId: PropTypes.number.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(GroupComment);
