import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./styles.css";
import { IMAGE_URL } from "../../utils/setAuthToken";

function ProfileUserCard({ profile, auth, auth: { user } }) {
  console.log("profile", profile.profile)
  console.log("AUTH", auth)
  let res = null;
  let url = null;
  if (user) {
    res = user.avatar && user.avatar.match(/^\/\//g);
    url = res == null ? `${IMAGE_URL}${user.avatar}` : user.avatar
  }

  return (
    <div className="profile-user-container">
      <div className="profile-user-card">
        <div className="profile-user-img-container">
          <img
            className="profile-user-img"
            src={url}
            /*"../images/portrait.png"*/ alt=""
          />
        </div>
        <div className="profile-user-content">
          <h2 className="profile-user-heading">{user && user.name}</h2>
          <Link to="/groups">
            <button className="btn btn-secondary">Invite to a group</button>
          </Link>
          <div className="user-grid-cards">
            <div className="profile-user-stats">
              <h3 className="profile-user-stats_heading">Posts</h3>
              <p className="profile-user-stats_para">150</p>
            </div>
            <div className="profile-user-stats">
              <h3 className="profile-user-stats_heading">Comments</h3>
              <p className="profile-user-stats_para">300</p>
            </div>
            <div className="profile-user-stats">
              <h3 className="profile-user-stats_heading">Likes</h3>
              <p className="profile-user-stats_para">1100</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ProfileUserCard.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps)(ProfileUserCard);
