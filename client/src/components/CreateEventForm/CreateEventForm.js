import React from 'react'
import './styles.css'

function CreateEventForm() {
  return (
    <form>
    <fieldset className="create-event-fieldset">
    
      <ul className="create-event-list"> 
        <li>   
          <label>Event Title:</label>
          <input 
            type="text" 
            placeholder="Event title here" 
            id="event-name" 
            name="event_name" 
          />
        </li>
        <li>   
        <label>Event Time:</label>
          <select id="event-time" name="event_time">                 
              <option value="12:00 PM">12:00 PM</option>
              <option value="1:00 PM">1:00 PM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="3:00 PM">3:00 PM</option>
              <option value="4:00 PM">4:00 PM</option>
              <option value="5:00 PM">5:00 PM</option>
              <option value="6:00 PM">6:00 PM</option>
              <option value="7:00 PM">7:00 PM</option>
              <option value="8:00 PM">8:00 PM</option>
              <option value="9:00 PM">9:00 PM</option>
              <option value="10:00 PM">10:00 PM</option>
              <option value="6:00 AM">6:00 AM</option>
              <option value="7:00 AM">7:00 AM</option>
              <option value="8:00 AM">8:00 AM</option>
              <option value="9:00 AM">9:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
            </select>
        </li>
        <li>   
          <label>Event Location:</label>
          <input 
            type="text" 
            placeholder="Enter event location" 
            id="event-location" 
            name="event_location" 
          />
        </li>
        <li>   
          <label>Event Description:</label>
          <textarea
            type="text" 
            placeholder="A brief description of the event" 
            id="event-description" 
            name="event_description">
            
          </textarea>
        </li>
      </ul>

      <button className="btn btn-primary create-event-btn">Create Event</button>
    </fieldset>
  </form>
  )
}

export default CreateEventForm
