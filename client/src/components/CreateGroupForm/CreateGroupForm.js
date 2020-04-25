import React, { useState  } from 'react'
import { connect } from "react-redux";
import { createGroup } from '../../actions/group'
import PropTypes from "prop-types";
import './styles.css'

function CreateGroupForm({ createGroup }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  })

  const { name, description } = formData

  const onChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const onSubmit = event => {
    event.preventDefault()
    createGroup({name, description})

    setFormData({
      name: '',
      description: '',
    })
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
};

const mapStateToProps = (state) => ({
  isAdmin: state.isAdmin
});

export default connect(mapStateToProps, { createGroup })(CreateGroupForm);
