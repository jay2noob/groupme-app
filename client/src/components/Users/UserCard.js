import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getCurrentProfile } from "../../actions/profile";
import { IMAGE_URL } from "../../utils/setAuthToken";
import "./styles.css";

function UserCard({ user: {user}, profile }) {
  let history = useHistory()

  console.log(user)
  let res = null;
  let url = null;
  if (user) {
    res = user.avatar && user.avatar.match(/^\/\//g);
    url = res == null ? `${IMAGE_URL}${user.avatar}` : user.avatar
  }

  return (
    <div className="profile-user-card">
      <div className="profile-user-img-container">
        <img
          className="profile-user-img"
          src={url}
          /*"../images/portrait.png"*/ alt=""
        />
      </div>
      <div className="profile-user-content">
        <h2 className="profile-user-heading">{user.name}</h2>

        <button className="btn btn-secondary">Invite to a group</button>
        <Link to={`/profile`}>
          <button onClick={() => history.push('/profile')} className="btn btn-primary">View Profile</button>
        </Link>
      </div>
    </div>
  );
}

UserCard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(UserCard);
