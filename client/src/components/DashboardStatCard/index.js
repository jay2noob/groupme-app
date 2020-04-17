import React from 'react'
import './styles.css'

function DashboardStatCard() {
  return (
    // Dashboard stat card
    <div className="grid-cards">
      <div className="dashboard-stat-card">
        <h2 className="dashboard-stat-heading">Posts</h2>
        <p className="dashboard-stat-data">200</p>
      </div>

      <div className="dashboard-stat-card">
        <h2 className="dashboard-stat-heading">Comments</h2>
        <p className="dashboard-stat-data">300</p>
      </div>

      <div className="dashboard-stat-card">
        <h2 className="dashboard-stat-heading">Likes</h2>
        <p className="dashboard-stat-data">400</p>
      </div>

      <div className="dashboard-stat-card">
        <h2 className="dashboard-stat-heading">Groups</h2>
        <p className="dashboard-stat-data">2</p>
      </div>
    </div>
  )
}

export default DashboardStatCard