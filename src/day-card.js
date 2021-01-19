import React, { Component } from 'react';
import './day-card.css';

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default class DayCard extends Component {
  constructor(props){
    super(props);

    this.state = {
      events: this.props.events
    }
  }

  componentDidUpdate(previousProps) {
    if (previousProps !== this.props) {
      this.setState({events: this.props.events})
    }
  }

  eventsList = () => {
    return this.state.events.map((event) => {
      return (
        <div className="event">
          <div className="event-content">
            <h4>{event.start} - {event.end}</h4>
            <p>{event.title}</p>
          </div>
          <div className="event-tools">
            <button onClick={() => this.removeEvent(event.id)}>
              <span className="material-icons md-18">
                remove_circle_outline
                      </span>
            </button>
          </div>
        </div>
      )
    })
  };

  noEvents = () => {
    return (
      <div className="no-events">
        <h4>Looks like you don't have any events today. Enjoy your day!</h4>
      </div>
    )
  }

  removeEvent = (id) => {
    let newEvents = this.state.events.filter(event => event.id !== id);
    this.setState({events: newEvents});
  };

  render() {
    return (
      <div className="day-card">
        <div className="header">
          <h2>
            {weekdays[this.props.day.getDay()]}, {months[this.props.day.getMonth()]} {this.props.day.getDate()}
          </h2>
          <hr></hr>
        </div>
        <div className="events-wrapper">
          { this.state.events && this.state.events.length > 0 && this.eventsList() }
          { (this.state.events === undefined || this.state.events.length < 1) && this.noEvents() }
        </div>
      </div>
    )
  }
}
