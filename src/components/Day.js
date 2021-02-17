import React from "react";
import { connect } from "react-redux";
import Event from "./Event";
import { addEvent } from "../actions/actions";

// const mapStateToProps = (state) => ({
//   //
// });

const mapDispatchToProps = (dispatch) => ({
  addEvent: (dayId) => dispatch(addEvent(dayId)),
  //   deleteEvent:
});

function Day(props) {
  const eventArr = props.events.map((el) => (
    <Event time={el.timeStr} name={el.name} />
  ));
  return (
    <div className="marketBox">
      <h2>{`This is ${props.day[0].toUpperCase() + props.day.slice(1)}`}</h2>
      <button onClick={() => props.addEvent(props.day)}>Add Event</button>
      {eventArr}
    </div>
  );
}

export default connect(null, mapDispatchToProps)(Day);
