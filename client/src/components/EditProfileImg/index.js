import React from 'react'
import './styles.css'

function EditProfileImg() {
  return (
    <div className="edit-profile-img-container">
      <img className="edit-profile-img" src="../images/portrait.png" alt=""/>
      <label htmlFor="">Change profile image</label>
      <input type="file" accept=".png, .jpg, .jpeg" className=" btn btn-secondary btn-fileupload" placeholder="Change profile image"/>
    </div>
  )
}

export default EditProfileImg
