import React from 'react'
import './styles.css'

function Search() {
  return (
    <div className="search-container">
      <label className="search-icon-container">
        <i className="fal fa-search search-icon"></i>
      </label>
      <input 
        className="search-field" 
        type="text" 
        placeholder="Search for a user" 
        name="search" 
      />
    </div>
  )
}

export default Search
