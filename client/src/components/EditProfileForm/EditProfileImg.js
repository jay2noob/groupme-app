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
      <label htmlFor="">Change profile image</label>
      <input
        type="file"
        accept=".png, .jpg, .jpeg"
        className=" btn btn-secondary btn-fileupload"
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
