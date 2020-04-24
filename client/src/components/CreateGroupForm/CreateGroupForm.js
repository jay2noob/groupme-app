import React, { useState  } from 'react'
import { connect } from "react-redux";
import { createGroup } from '../../actions/group'
import PropTypes from "prop-types";
import './styles.css'

function CreateGroupForm() {
  const [group, setGroup] = useState({
    name: '',
    desc: ''
  })

  const { name, desc } = group

  const onChange = event => {
    setGroup({
      [event.target.name]: event.target.value
    })
  }

  const onSubmit = event => {
    event.preventDefault()
    createGroup(group)

    setGroup({
      name: '',
      desc: ''
    })
  }

  return (
    <form onSubmit={onSubmit}>
      <fieldset className="create-group-fieldset">
      
        <ul className="create-group-list"> 
          <li>   
            <label>Group Name:</label>
            <input 
              type="text" 
              placeholder="Group name here" 
              id="group-name" 
              name="group_name" 
              value={name}
              onChange={onChange}
            />
          </li>
          <li>   
            <label>About Group:</label>
            <textarea
              type="text" 
              placeholder="A brief description of the group" 
              id="group-desc" 
              name="group_desc"
              value={desc}
              onChange={onChange}
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
