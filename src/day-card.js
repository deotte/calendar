import React, { Component } from 'react';
import './day-card.css';

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default class DayCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="day-card">
        <div className="header">
          <h2>
            {weekdays[this.props.day.getDay()]}, {months[this.props.day.getMonth()]} {this.props.day.getDate()}
          </h2>
          <hr></hr>
        </div>
        <div className="count">
          <h3>4 Events</h3>
        </div>
        <div className="event">
          <h4>9 AM - 10 AM</h4>
          <p>Call with manager</p>
        </div>
        <div className="event">
          <h4>9 AM - 10 AM</h4>
          <p>Call with manager</p>
        </div>
        <div className="event">
          <h4>9 AM - 10 AM</h4>
          <p>Call with manager</p>
        </div>
        <div className="tools">
          <button>
            <span className="material-icons">
              add
            </span>
            <p>Add New Event</p>
          </button>
        </div>
      </div>
    )
  }
}
