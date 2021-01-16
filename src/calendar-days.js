import React, { Component } from 'react';

export default class CalendarDays extends Component {
  constructor(props) {
    super(props)
  }

  // shouldComponentUpdate(nextProps) {
  //   return this.props.day.getMonth() === nextProps.day.getMonth();
  // }

  render() {
    let firstDayOfMonth = new Date(this.props.day.getFullYear(), this.props.day.getMonth(), 1);
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
        currentMonth: (firstDayOfMonth.getMonth() === this.props.day.getMonth()),
        date: (new Date(firstDayOfMonth)),
        month: firstDayOfMonth.getMonth(),
        number: firstDayOfMonth.getDate(),
        selected: (firstDayOfMonth.toDateString() === this.props.day.toDateString()),
        year: firstDayOfMonth.getFullYear()
      }

      currentDays.push(calendarDay);
    }

    currentDays = currentDays;

    return (
      <div className="table-content">
        {
          currentDays.map((day) => {
            return (
              <div className={"calendarDay" + (day.currentMonth ? " current" : "") + (day.selected ? " selected" : "")}
                   onClick={()=> this.props.changeCurrentDay(day)}>
                <p>{day.number}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}
