import React, { Component } from 'react';
import './nav.css';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav>
        <div className="nav-header">
          <h1>Calendar</h1>
        </div>
        <div class="nav-menu">
          <a href="" id="selected">Daily Planner</a>
          <a href="">Notes</a>
          <a href="">Reports</a>
        </div>
        <div className="nav-profile">
          <span>Derrick</span>
          <button>
            <span className="material-icons md-24">
              person
            </span>
          </button>
        </div>
      </nav>
    )
  }
}
