import React, { useState } from 'react'
import { Redirect } from "react-router-dom"
import { connect } from "react-redux";
import { createGroup } from '../../actions/createGroup'
import PropTypes from "prop-types";
import './styles.css'

function CreateGroupForm({ createGroup, group }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    groupImage: ''
  })

  const { name, description, groupImage } = formData

  const onChange = event => {
    if (event.target.files) {
      setFormData({
        ...formData,
        groupImage: event.target.files[0]
      })
    } else {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value
      })
    }
  }
  const onSubmit = event => {
    event.preventDefault()
    createGroup({ name, description, groupImage })

    setFormData({
      name: '',
      description: '',
      groupImage: ''
    })
  }

  if (group) {
    console.log("Group", group);
    return <Redirect
      to={{
        pathname: `/group/${group._id}`,
        group
      }}
      />;
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
            >
            </textarea>
          </li>
        </ul>

        <div className="create-group-img-container">
          <label htmlFor="">Optional: Add an image for the group</label>
            <br />
            <input 
              type="file" 
              accept=".png, .jpg, .jpeg" 
              name="groupImage"
              onChange={(event) => onChange(event)}
              className=" btn btn-secondary btn-fileupload" 
            />
        </div>

        <button className="btn btn-primary create-group-btn">Create Group</button>
      </fieldset>
    </form>
  )
}

CreateGroupForm.propTypes = {
  createGroup: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool,
  group: PropTypes.object
};

const mapStateToProps = (state) => ({
  isAdmin: state.isAdmin,
  group: state.createGroup.group
});

export default connect(mapStateToProps, { createGroup })(CreateGroupForm);
