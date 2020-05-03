import React, { useState } from 'react'
import { connect } from "react-redux";
import { createEvent } from "../../actions/event";
import PropTypes from "prop-types";
import { Redirect, useParams, useHistory } from 'react-router-dom'
import './styles.css'



function CreateEventForm({ createEvent, currentEvent }) {
  let history = useHistory()

  const { groupID } = useParams();

  const [formData, setFormData] = useState({
    title: '', 
    description: '',
    location: '', 
    time: '12:00 PM', 
    eventImage: ''
  })

  const { title, description, location, time, eventImage } = formData

  const onChange = (event) => {
    if (event.target.files) {
      setFormData({
        ...formData,
        eventImage: event.target.files[0],
      });
    } else {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    }
  };
  const onSubmit = (event) => {
    event.preventDefault()

    console.log("FORM DATA", groupID, title, description, location, time, eventImage)
    createEvent({ groupID, title, description, location, time, eventImage })
    setFormData({
      title: '', 
      description: '', 
      location: '', 
      time: '', 
      eventImage: ''
    })
    history.push(`/groups/events/${groupID}`)
    console.log(history)

  }


  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <fieldset className="create-event-fieldset">
      
        <ul className="create-event-list"> 
          <li>   
            <label>Event Title:</label>
            <input 
              type="text" 
              placeholder="Event title here" 
              id="event-name" 
              name="title"
              onChange={(event) => onChange(event)}
            />
          </li>
          <li>   
            <label>Event Time:</label>
            <select id="event-time" name="time" onChange={(event) => onChange(event)}>
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
              name="location"
              onChange={(event) => onChange(event)}
            />
          </li>
          <li>   
            <label>Event Description:</label>
            <textarea
              type="text"
              placeholder="A brief description of the event"
              id="event-description"
              onChange={(event) => onChange(event)}
              name="description" />
          </li>
      
          <li>
            <div className="create-group-img-container">
              <label
                className="file-upload btn-secondary"
                htmlFor="img-upload"
              >
                <i className="fal fa-image" /> Upload Photo
              </label>
              <input
                name="eventImage"
                onChange={(event) => onChange(event)}
                className="btn btn-fileupload file-img-upload "
                id="img-upload"
                type="file"
                accept=".png, .jpg, .jpeg"
              />
            </div>
          </li>
        </ul>
        <button className="btn btn-primary create-event-btn">Create Event</button>
      </fieldset>
    </form>
  )
}

CreateEventForm.propTypes = {
  createEvent: PropTypes.func.isRequired,
  isGoing: PropTypes.bool,
  currentEvent: PropTypes.object
}

const mapStateToProps = (state) => ({
  isGoing: state.isGoing,
  currentEvent: state.currentEvent
})

export default connect(mapStateToProps, { createEvent })(CreateEventForm)
