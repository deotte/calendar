import React, { Component } from 'react';

export default class DayCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div><p>{this.props.day.toLocaleString()}</p></div>
    )
  }
}
