import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addPost } from "../../actions/post";
import "./styles.css";

function CreatePostCard() {
  const [text, setText] = useState("");

  return (
    <div className="create-card-container">
      <div className="create-card">
        <div className="create-content">
          <div className="create-heading-container">
            <h2 className="create-heading">Create a new post</h2>
          </div>
          <div className="create-post">
            <div className="create-post-img">
              <img
                className="create-post-user-img "
                src="../images/portrait.png"
                alt=""
              />
            </div>
            <form
              className="create-post-form"
              onSubmit={(e) => {
                e.preventDefault();
                addPost({ text });
                setText("");
              }}
            >
              <textarea
                type="text"
                cols="30"
                rows="5"
                placeholder="Write something here..."
                className="create-post-input"
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
              ></textarea>
            </form>
          </div>
          <div className="create-post-submit">
            <div className="create-post-list">
              <li className="create-post-item">
                <label
                  className="file-upload btn-secondary"
                  htmlFor="img-upload"
                >
                  <i className="fal fa-image" /> Upload Photo
                </label>
                <input
                  className="file-img-upload"
                  id="img-upload"
                  type="file"
                />
              </li>
            </div>

            <button
              className="btn btn-primary post-btn"
              onSubmit={(e) => addPost(e)}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

CreatePostCard.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(
  null,

  { addPost }
)(CreatePostCard);
