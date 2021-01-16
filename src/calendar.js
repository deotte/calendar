import React, { Component } from 'react';
import './Calendar.css';
import DayCard from './day-card.js';
import CalendarDays from './calendar-days.js';

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      calendarDays: [],
      weekdays: weekdays,
      months: months,
      currentDay: new Date()
    }
  }
  
  render() {
    return (
      <section>
        <div className="calendar">
          <div className="calendar-header">
            <div className="title">
              <h2>{months[this.state.currentDay.getMonth()]} {this.state.currentDay.getFullYear()}</h2>
            </div>
            <div className="tools">
              <button onClick={this.previousDay}>
                <span className="material-icons">
                  arrow_back
                </span>
              </button>
              <p>{months[this.state.currentDay.getMonth()].substring(0,3)} {this.state.currentDay.getDate()}</p>
              <button onClick={this.nextDay}>
                <span className="material-icons">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
          <div className="calendar-body">
            <div className="table-header">
              {
                this.state.weekdays.map((weekday) => {
                  return <div className="weekday"><p>{weekday}</p></div>
                })
              }
            </div>
            <CalendarDays day={this.state.currentDay} changeCurrentDay={this.changeCurrentDay}/>
          </div>
        </div>
        <DayCard day={this.state.currentDay}/>
      </section>
    )
  }

  changeCurrentDay = (day) => {
    this.setState({ currentDay: new Date(day.year, day.month, day.number) });
  }

  nextDay = () => {
    this.setState({ currentDay: new Date(this.state.currentDay.setDate(this.state.currentDay.getDate() + 1)) });
  }

  previousDay = () => {
    this.setState({ currentDay: new Date(this.state.currentDay.setDate(this.state.currentDay.getDate() - 1)) });
  }
}
