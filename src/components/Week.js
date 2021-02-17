import React, { Component } from "react";
import Day from "./Day";
import { connect } from "react-redux";
import Event from "./Event";

const mapStateToProps = (state) => ({
  //
  weekId: state,
});

const days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

class Week extends Component {
  render() {
    const daysArr = days.map((el) => (
      <Day day={el} events={this.props.weekId[el]} />
    ));

    return <div className="displayBox">{daysArr}</div>;
  }
}

export default connect(mapStateToProps)(Week);
