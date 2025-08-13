import React, { useState } from 'react'
import NavbarContainer from '../components/NavbarContainer'
import notifications from '../assets/notifications'
import "../css/notifications.css"

const Notifications = () => {
  const [current, setCurrent] = useState(notifications);

  // handle filter
  const handleFilter = (e) => {
    if (e.target.value === "all") {
      setCurrent(notifications);
    } else {
      const filteredNotis = notifications.filter(n => n.type === e.target.value);
      setCurrent(filteredNotis);
    }

  }
  const space = {
    height: "10vh",
  }
  return (
    <>
      <NavbarContainer />

      <div className="notifications">
        <div className="noti-header">
          <h2>Notification</h2>
          <hr />
          <div className='filter-noti'>
            <p>Filter : </p>
            <select onChange={handleFilter} >
              <option value="all">All</option>
              <option value="like">Like</option>
              <option value="follow">Follow</option>
              <option value="mention">Mention</option>
              <option value="event">Event</option>
              <option value="reaction">Reaction</option>
              <option value="share">Share</option>
              <option value="reminder">Reminder</option>
            </select>
          </div>
        </div>

        <div className="noti-wrapper">
          {
            current.map((n) => (
              <div className='noti' key={n.id}>
                <div className="noti-icon">
                  <img src={n.dp} alt="" />
                </div>

                <p>{n.message}</p>

                <div>
                  <p>{n.time}</p>
                  <i className="fa-solid fa-ellipsis"></i>
                </div>
              </div>
            ))
          }
        </div>
      </div>


      <div style={space}></div>
    </>
  )
}

export default Notifications