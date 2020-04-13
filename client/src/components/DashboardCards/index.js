import React from 'react'
import DashboardStatCard from '../DashboardStatCard'
import DashboardProfileCard from '../DashboardProfileCard'
import DashboardGroupCard from '../DashboardGroupCard'
import './styles.css'

function DashboardCards() {
  return (
    <div className="dashboard-card-container">
      <DashboardProfileCard />
      <DashboardStatCard />
      <DashboardGroupCard />
    </div>
  )
}

export default DashboardCards