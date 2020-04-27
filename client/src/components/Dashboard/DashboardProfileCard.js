import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile, deleteAccount } from "../../actions/profile";
import "./styles.css";

const DashboardProfileCard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);
  return (
    <div className="dashboard-profile-container">
      <div className="dashboard-profile-card">
        <div className="dashboard-profile-img-container">
          <img
            className="dashboard-profile-img"
            src={user && user.avatar} //"../images/portrait.png"
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
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  DashboardProfileCard
);
