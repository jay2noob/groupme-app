import React from 'react'
import DashboardStatCard from '../DashboardStatCard'
import DashboardProfileCard from '../DashboardProfileCard'
import './styles.css'

function DashboardCards() {
  return (
    <div className="dashboard-card-container">
      <DashboardProfileCard />
      <DashboardStatCard />
    </div>
  )
}

export default DashboardCards