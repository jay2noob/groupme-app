import React, { useState } from 'react'
import { connect } from 'react-redux';
import { setSearchTerm } from '../../actions/profile'
import './styles.css'

function Search({ setSearchTerm }) {
  // Delcare a search state value
  const [searchValue, setSearchValue] = useState('')

  // Update the state from event.target.value (what the user types)
  function handleSearchChange(event) {
    console.log(event.target.value)
    setSearchValue(event.target.value)
  }

  const searchUsers = () => {
    console.log('hey===>>>>>');
    setSearchTerm(searchValue)
  }

  return (
    <div className="search-container">
      <label onClick={searchUsers} className="search-icon-container">
        <i className="fal fa-search search-icon"></i>
      </label>
      <input
        className="search-field"
        type="text"
        placeholder="Search for a user"
        name="search"
        // set value prop to the current state 
        value={searchValue}
        // event function that keeps the value up to date 
        onChange={handleSearchChange}
      />
    </div>
  )
}

export default connect(null, { setSearchTerm })(Search);
