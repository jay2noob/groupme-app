import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProfiles } from "../../actions/profile";
import UserCard from './UserCard'
import "./styles.css";

function UsersContainer({ searchTerm, getProfiles, profile: { profiles } }) {

  console.log('searr==>>', searchTerm)

  useEffect(() => {
    getProfiles()
    // eslint-disable-next-line
  }, [])

  return (
    <div className="profile-user-container margin-left">
      {profiles && profiles.length === 0 ? (
        <h3>No profiles found</h3>
      ) : (
        profiles.map(user => (
          <UserCard user={user} key={user._id}/>
        ))
      )}
    </div>
  );
}

UsersContainer.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  searchTerm: state.profile.searchTerm
});

export default connect(mapStateToProps, { getProfiles })(UsersContainer);
