import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost, getPosts } from "../../actions/post";
import { useParams } from "react-router-dom";
import "./styles.css";

function CreatePostCard({ addPost, getPosts, post: { posts, loading } }) {
  const [formData, setFormData] = useState({
    text: "",
  });

  const { text } = formData;

  const { groupID } = useParams();

  const onChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addPost({ text });
    setFormData({
      text: "",
    });
  };

  return (
    <div className="create-card-container">
      <div className="create-card">
        <div className="create-content">
          <div className="create-heading-container">
            <h2 className="create-heading">Create a new post</h2>
          </div>
          <form
            className="create-post-form"
            onSubmit={(event) => onSubmit(event)}
          >
            <div className="create-post">
              <div className="create-post-img">
                <img
                  className="create-post-user-img "
                  src="../images/portrait.png"
                  alt=""
                />
              </div>

              <textarea
                type="text"
                placeholder="Write something here..."
                className="create-post-input"
                value={text}
                name="text"
                onChange={(event) => onChange(event)}
                required
              ></textarea>
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

              <button className="btn btn-primary post-btn">Post</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

CreatePostCard.propTypes = {
  addPost: PropTypes.func.isRequired,
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { addPost, getPosts })(CreatePostCard);
