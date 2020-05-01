import React, { useState, useEffect, Fragment } from "react";
import { withRouter, Link } from "react-router-dom";
import {
  createProfile,
  getCurrentProfile,
  deleteAccount,
} from "../../actions/profile";
import { loadUser } from "../../actions/auth";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./styles.css";
import { IMAGE_URL } from "../../utils/setAuthToken";

const initialState = {
  firstname: "",
  lastname: "",
  city: "",
  state: "",
  zip: "",
  birthdate: "",
  phonenumber: "",
  avatarImage: "",
};

const EditProfileForm = ({
  createProfile,
  getCurrentProfile,
  loadUser,
  deleteAccount,
  profile: { profile, loading },
  history,
  auth: { user },
}) => {
  const [formData, setFormData] = useState(initialState);

  let res = null;
  let url = null;
  if (user) {
    res = user.avatar && user.avatar.match(/^\/\//g);
    url = res == null ? `${IMAGE_URL}${user.avatar}` : user.avatar;
  }
  useEffect(() => {
    if (!profile) getCurrentProfile();

    if (!loading && profile) {
      const profileData = { ...initialState };
      for (const key in profile) {
        if (key in profileData) profileData[key] = profile[key];
      }
      loadUser();
      setFormData(profileData);
    }
  }, [loading, loadUser, getCurrentProfile, profile, loadUser]);

  const {
    firstname,
    lastname,
    city,
    state,
    zip,
    birthdate,
    phonenumber,
    avatarImage,
  } = formData;

  const onChange = (event) => {
    if (event.target.files) {
      setFormData({
        ...formData,
        avatarImage: event.target.files[0],
      });
    } else {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    }
    // console.log("FORM", formData, event.target.files[0]);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    createProfile(formData, history);
  };

  return (
    <Fragment>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="edit-profile-img-container">
          <img className="edit-profile-img" src={url} alt="" />
          <label className="file-upload btn-secondary" htmlFor="img-upload">
            <i className="fal fa-image" /> Upload Photo
          </label>
          <input
            name="avatarImage"
            onChange={(event) => onChange(event)}
            className="file-img-upload "
            id="img-upload"
            type="file"
            accept=".png, .jpg, .jpeg"
            value={avatarImage}
          />
        </div>
        <fieldset className="edit-profile-fieldset">
          <ul className="edit-profile-list">
            <li>
              <label>First Name:</label>
              <input
                type="text"
                placeholder="Required"
                id="first-name"
                name="firstname"
                value={firstname}
                onChange={(e) => onChange(e)}
              />
            </li>
            <li>
              <label>Last Name:</label>
              <input
                type="text"
                placeholder="Required"
                id="last-name"
                name="lastname"
                value={lastname}
                onChange={(e) => onChange(e)}
              />
            </li>
            <li>
              <label>City:</label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="Enter city"
                value={city}
                onChange={(e) => onChange(e)}
              />
            </li>
            <li>
              <label>State:</label>
              <select
                id="state"
                name="state"
                value={state}
                onChange={(e) => onChange(e)}
              >
                <option value="select">Choose State</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
            </li>
            <li>
              <label>Zip Code:</label>
              <input
                type="tel"
                className="zip"
                id="zipcode"
                name="zip"
                placeholder="Enter 5 digit zip code"
                value={zip}
                onChange={(e) => onChange(e)}
              />
            </li>
            <li>
              <label>Birthday:</label>
              <input
                type="date"
                id="birthday"
                name="birthdate"
                value={birthdate}
                onChange={(e) => onChange(e)}
              />
            </li>
            <li>
              <label>Phone Number:</label>
              <input
                type="tel"
                id="phone"
                name="phonenumber"
                placeholder="Enter phone number"
                value={phonenumber}
                onChange={(e) => onChange(e)}
              />
            </li>
          </ul>
        </fieldset>
        <div className="edit-profile-buttons">
          <button type="submit" className="btn btn-primary my-1">
            Submit
          </button>

          <Link to="/dashboard">
            <button className="btn btn-secondary back-btn">Go Back</button>
          </Link>

          <Link to="/">
            <button className="btn delete-btn" onClick={() => deleteAccount()}>
              Delete Profile
            </button>
          </Link>
        </div>
      </form>
    </Fragment>
  );
};

EditProfileForm.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  loadUser: PropTypes.func.isRequired,
  createProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default withRouter(
  connect(mapStateToProps, {
    createProfile,
    getCurrentProfile,
    loadUser,
    deleteAccount,
  })(EditProfileForm)
);
