import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

function CreatePostCard() {
  return (
    <div className="create-card-container">
      <div className="create-card">
        <div className="create-content">
          <div className="create-heading-container">
            <h2 className="create-heading">Create a new post</h2>
          </div>
          <div className="create-post">
            <div className="create-post-img">
              <img className="create-post-user-img " src="../images/portrait.png" alt=""/>
            </div>
            <form className="create-post-form">
              <textarea
                type="text"
                placeholder="Write something here..."
                className="create-post-input"
              ></textarea> 
            </form>
          </div>
          <div className="create-post-submit">
            <div className="create-post-list">
              <li className="create-post-item">
                <label className="file-upload btn-secondary" htmlFor="img-upload">
                  <i className="fal fa-image" /> Upload Photo
                </label>
                <input 
                  className="file-img-upload"
                  id="img-upload"
                  type="file"
                />
              </li>
            </div>
            <Link to='/create' className="create-post-btn">
              <button 
                className="btn btn-primary post-btn">
                  Post
              </button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CreatePostCard
