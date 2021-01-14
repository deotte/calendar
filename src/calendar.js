import React, { Component } from 'react';
import './Calendar.css';
import DayCard from './day-card.js';

let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default class Calendar extends Component {
  constructor(props) {
    super(props);

    this.changeCurrentDay = this.changeCurrentDay.bind(this);

    this.state = {
      calendarDays: [],
      weekdays: weekdays,
      months: months,
      currentDay: new Date(),
      currentYear: new Date().getFullYear(),
      currentMonth: new Date().getMonth()
    }
  }
  
  render() {
    return (
      <section>
        <div className="calendar">
          <div className="calendar-header"></div>
          <div className="calendar-body">
            <div className="table-header">
              {
                this.state.weekdays.map((weekday) => {
                  return <div className="weekday"><p>{weekday}</p></div>
                })
              }
            </div>
            <div className="table-content">
              {
                this.state.calendarDays.map((day) => {
                  return (
                    <div className={"calendarDay" + (day.currentMonth ? " current" : "") + (day.selected ? " selected" : "")}
                        onClick={() => this.changeCurrentDay(day) }>
                      <p>{day.number}</p>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        <DayCard day={this.state.currentDay}/>
      </section>
    )
  }

  componentDidMount() {
    this.generateCalendar();
  }

  generateCalendar(year, month) {
    this.setState({
      currentMonth: month,
      currentYear: year
    });

    let firstDayOfMonth = new Date(this.state.currentYear, this.state.currentMonth, 1);
    let weekdayOfFirstDay = firstDayOfMonth.getDay();
    let currentDays = [];

    for (let day = 0; day < 42; day++) {
      if (day === 0 && weekdayOfFirstDay === 0) {
        firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
      } else if (day === 0) {
        firstDayOfMonth.setDate(firstDayOfMonth.getDate() + (day - weekdayOfFirstDay));
      } else {
        firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
      }

      let calendarDay = {
        currentMonth: (firstDayOfMonth.getMonth() === this.state.currentMonth),
        date: (new Date(firstDayOfMonth)),
        month: firstDayOfMonth.getMonth(),
        number: firstDayOfMonth.getDate(),
        selected: (firstDayOfMonth.toDateString() === this.state.currentDay.toDateString()),
        year: firstDayOfMonth.getFullYear()
      }

      currentDays.push(calendarDay);
      this.setState({calendarDays: currentDays});
    }
  }

  changeCurrentDay(day) {
    this.setState({ currentDay: new Date(day.year, day.month, day.number) });
  }
}
