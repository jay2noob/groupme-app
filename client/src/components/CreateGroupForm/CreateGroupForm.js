import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createGroup } from "../../actions/group";
import PropTypes from "prop-types";
import "./styles.css";

function CreateGroupForm({ createGroup, currentGroup }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    groupImage: "",
  });

  const { name, description, groupImage } = formData;

  const onChange = (event) => {
    if (event.target.files) {
      setFormData({
        ...formData,
        groupImage: event.target.files[0],
      });
    } else {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    }
  };
  const onSubmit = (event) => {
    event.preventDefault();
    createGroup({ name, description, groupImage });

    setFormData({
      name: "",
      description: "",
      groupImage: "",
    });
  };

  if (currentGroup) {
    console.log("currentGroup", currentGroup);
    return (
      <Redirect
        to={{
          pathname: `/groups/${currentGroup._id}`,
          currentGroup,
        }}
      />
    );
  }

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <fieldset className="create-group-fieldset">
        <ul className="create-group-list">
          <li>
            <label>Group Name:</label>
            <input
              type="text"
              placeholder="Group name here"
              id="name"
              name="name"
              value={name}
              onChange={(event) => onChange(event)}
            />
          </li>
          <li>
            <label>About Group:</label>
            <textarea
              type="text"
              placeholder="A brief description of the group"
              id="description"
              name="description"
              value={description}
              onChange={(event) => onChange(event)}
            ></textarea>
          </li>
        </ul>

        <div className="create-group-img-container">

          <label
            className="file-upload btn-secondary"
            htmlFor="img-upload"
          >
            <i className="fal fa-image" /> Upload Photo
          </label>
          <input
            name="groupImage"
            onChange={(event) => onChange(event)}
            className="btn btn-fileupload file-img-upload "
            id="img-upload"
            type="file"
            accept=".png, .jpg, .jpeg"
          />
        </div>
        
          <button className="btn btn-primary create-group-btn">
            Create Group
          </button>
      </fieldset>
    </form>
  );
}

CreateGroupForm.propTypes = {
  createGroup: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool,
  currentGroup: PropTypes.object,
};

const mapStateToProps = (state) => ({
  isAdmin: state.isAdmin,
  currentGroup: state.currentGroup,
});

export default connect(mapStateToProps, { createGroup })(CreateGroupForm);
