import React, { Component } from "react";
import Week from "./Week";

export default class Calendar extends Component {
  render() {
    return (
      <center className="outerBox">
        <h1>Calendar</h1>
        <Week />
      </center>
    );
  }
}
