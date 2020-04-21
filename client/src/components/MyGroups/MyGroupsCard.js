import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'


function MyGroupsCard() {
  return (
    <ul className="mygroups-list">
      <li className="mygroups-item">
        <div className="mygroups-img-container">
          <img className="mygroups-img" src="../images/coverphoto.png" alt=""/>
        </div>
        <div className="mygroups-content">
          <h3 className="mygroups-content-heading">My Group Name</h3>
          <ul className="mygroups-content-list">
            <li className="mygroups-content-item">
              <h4 className="mygroups-content-stat-heading">Posts</h4>
              <p className="mygroups-content-stat">100</p>
            </li>
            <li className="mygroups-content-item">
              <h4 className="mygroups-content-stat-heading">Members</h4>
              <p className="mygroups-content-stat">20</p>
            </li>
            <li className="mygroups-content-item">
              <h4 className="mygroups-content-stat-heading">Likes</h4>
              <p className="mygroups-content-stat">200</p>
            </li>
          </ul>
          <Link to="/group/1">
            <button className="btn btn-secondary mygroups-btn">View Group</button>
          </Link>  
        </div>
      </li>
    </ul>
  )
}

export default MyGroupsCard
