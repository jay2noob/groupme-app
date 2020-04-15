import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

function GroupComments() {
  return (
    <div className="group-comment-top">
      <ul className="group-comments-post">
        <li className="group-comment-li">
          <div className="group-comment-img-container">
            <img className="group-comment-img" src="../images/portrait.png" alt=""/>
          </div>
          <div className="group-comment-info">
            <Link to="/profile">
              <h6 className="group-comment-heading">USERNAME</h6>
            </Link>
            <p className="group-comment-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncu</p>
          </div>
        </li>

        <li className="group-comment-li">
          <div className="group-comment-img-container">
            <img className="group-comment-img" src="../images/portrait.png" alt=""/>
          </div>
          <div className="group-comment-info">
            <Link to="/profile">
              <h6 className="group-comment-heading">USERNAME</h6>
            </Link>
            <p className="group-comment-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncu</p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default GroupComments