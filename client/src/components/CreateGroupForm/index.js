import React from 'react'
import './styles.css'

function CreateGroupForm() {
  return (
    <form>
      <fieldset className="create-group-fieldset">
      
        <ul className="create-group-list"> 
          <li>   
            <label>Group Name:</label>
            <input 
              type="text" 
              placeholder="Group name here" 
              id="group-name" 
              name="group_name" 
            />
          </li>
          <li>   
            <label>About Group:</label>
            <textarea
              type="text" 
              placeholder="A brief description of the group" 
              id="about-group" 
              name="about_group">
              
            </textarea>
          </li>
        </ul>

        <div className="create-group-img-container">
          <label htmlFor="">Optional: add an image for the group</label>
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

export default CreateGroupForm
