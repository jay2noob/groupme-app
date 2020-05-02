import React from "react";
import { Link } from "react-router-dom";
//import { IMAGE_URL } from "../../utils/setAuthToken";
import "./styles.css";

function MyEventsCard({ myEvent }) {
  //var res = myEvent.avatar.match(/^\/\//g);
  //const url = res == null ? `${IMAGE_URL}${myEvent.avatar}` : myEvent.avatar;

  return (
    <ul className="myevents-list">
      <li className="myevents-item">
        <div className="myevents-img-container">
          <img className="myevents-img" src={""} alt="" />
        </div>
        <div className="myevents-content">
          <h2>Group Name</h2>
          <h3 className="myevents-content-heading">{myEvent.title}</h3>
          <h5>{myEvent.location}</h5>
          <p className="myevents-event-time">{myEvent.time}</p>

          <Link to={`/group/events/${myEvent._id}`}>
            <button className="btn btn-secondary myevents-btn">
              View Event
            </button>
          </Link>
        </div>
      </li>
    </ul>
  );
}

export default MyEventsCard;
