import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

function CreatePostCard() {
  return (
    <div className="create-card-container">
      <div className="create-card">
        <div className="create-content">
          <h2 className="create-heading">Create a new post</h2>
          <p className="create-para">Create a post to share with your group.</p>
          <Link to='/create'>
            <button 
              className="btn btn-primary">
                Create Post
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CreatePostCard
