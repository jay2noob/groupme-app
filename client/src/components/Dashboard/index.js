import React from 'react'
import DashboardStatCard from './DashboardStatCard'
import DashboardProfileCard from './DashboardProfileCard'
import CreateGroupCard from './CreateGroupCard'
import './styles.css'

function DashboardCards() {
  return (
    // Dashboard container 
    <section className="dashboard-card-container">
      <DashboardProfileCard />
      <DashboardStatCard />
      <CreateGroupCard />
    </section>
  )
}

export default DashboardCards