import React from "react";
import EditProfileForm from "./EditProfileForm";
import EditProfileImg from "./EditProfileImg";
import "./styles.css";

function EditProfileContainer() {
  return (
    // Edit profile
    <div className="edit-profile-card-container">
      <div className="edit-profile-card">
        <div className="edit-profile-heading">
          <h2>Personal Information</h2>
        </div>
        <EditProfileImg />
        <EditProfileForm />
      </div>
    </div>
  );
}

export default EditProfileContainer;
