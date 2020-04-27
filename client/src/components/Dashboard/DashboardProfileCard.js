import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./styles.css";

const DashboardProfileCard = ({ auth: { user } }) => {
  return (
    <div className="dashboard-profile-container">
      <div className="dashboard-profile-card">
        <div className="dashboard-profile-img-container">
          <img
            className="dashboard-profile-img"
            src={user && user.avatar}
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
};

DashboardProfileCard.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(DashboardProfileCard);
