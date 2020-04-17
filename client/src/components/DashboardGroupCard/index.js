import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

function DashboardGroupCard() {
  return (
    // Dashboard group card
    <div className="dashboard-group-container">
      <div className="dashboard-group-card">
        <div className="dashboard-group-content">
          <h2 className="dashboard-group-heading">Create a new group</h2>
          <p className="dashboard-group-para">Create a group to start sharing memories with friends and family</p>
          <Link to='/create'>
            <button 
              className="btn btn-primary">
                Create group
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DashboardGroupCard