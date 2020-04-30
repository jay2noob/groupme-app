import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./styles.css";
import { IMAGE_URL } from "../../utils/setAuthToken";

function DashboardProfileCard({ auth: { user } }) {

  let res = null;
  let url = null;
  if (user) {
    res = user.avatar && user.avatar.match(/^\/\//g);
    url = res == null ? `${IMAGE_URL}${user.avatar}` : user.avatar
  }
  
  return (
    <div className="dashboard-profile-container">
      <div className="dashboard-profile-card">
        <div className="dashboard-profile-img-container">
          <img
            className="dashboard-profile-img"
            src={url}
            alt=""
          />
        </div>
        <div className="dashboard-profile-content">
          <h2 className="dashboard-profile-heading">{user && user.name}</h2>
          <Link to="/profile/edit">
            <button className="btn btn-primary">Edit Profile</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

DashboardProfileCard.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(DashboardProfileCard);
