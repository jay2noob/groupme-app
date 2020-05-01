import React from "react";
import EditProfileForm from "./EditProfileForm";
import "./styles.css";

function EditProfileContainer() {
  return (
    // Edit profile
    <div className="edit-profile-card-container">
      <div className="edit-profile-card">
        <div className="edit-profile-heading">
          <h2>Personal Information</h2>
        </div>
        <EditProfileForm />
      </div>
    </div>
  );
}

export default EditProfileContainer;
