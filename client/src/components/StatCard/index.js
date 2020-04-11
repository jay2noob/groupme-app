import React from 'react'
import './styles.css'

function StatCard() {
  return (
    <div className="grid-cards">
      <div className="stat-card">
        <h2 className="stat-card-heading">Posts</h2>
        <p className="stat-card-data">200</p>
      </div>

      <div className="stat-card">
        <h2 className="stat-card-heading">Comments</h2>
        <p className="stat-card-data">300</p>
      </div>

      <div className="stat-card">
        <h2 className="stat-card-heading">Likes</h2>
        <p className="stat-card-data">400</p>
      </div>

      <div className="stat-card">
        <h2 className="stat-card-heading">Groups</h2>
        <p className="stat-card-data">2</p>
      </div>
    </div>
  )
}

export default StatCard