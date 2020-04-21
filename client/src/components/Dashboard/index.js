import React from 'react'
import DashboardStatCard from './DashboardStatCard'
import DashboardProfileCard from './DashboardProfileCard'
import CreateGroupCard from './CreateGroupCard'
import CreateEventCard from './CreateEventCard'
import CreatePostCard from '../CreatePostCard'
import './styles.css'

function DashboardCards() {
  return (
    // Dashboard container 
    <section className="dashboard-card-container">
      <DashboardProfileCard />
      <DashboardStatCard />
      <CreateGroupCard />
      <CreateEventCard />
      <CreatePostCard />
    </section>
  )
}

export default DashboardCards