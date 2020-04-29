import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./styles.css";

function EditProfileImg({ auth: { user } }) {
  return (
    <div className="edit-profile-img-container">
      <img
        className="edit-profile-img"
        src={user && user.avatar}
        /*"../images/portrait.png"*/ alt=""
      />
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
        accept=".png, .jpg, .jpeg"
      />
    </div>
  );
}

EditProfileImg.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(EditProfileImg);
