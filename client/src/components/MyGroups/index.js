import React from 'react'
import MyGroupsCard from './MyGroupsCard'
import './styles.css'

function MyGroupsContainer() {
  return (
    <section className="mygroups-card-container">
      <h2 className="mygroups-heading">My Groups</h2>
      <MyGroupsCard />
    </section>
  )
}

export default MyGroupsContainer
