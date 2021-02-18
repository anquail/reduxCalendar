import React from "react";
import { connect } from "react-redux";
import Event from "./Event";
import { addEvent, deleteEvent } from "../actions/actions";

// const mapStateToProps = (state) => ({
//   //
// });

const mapDispatchToProps = (dispatch) => ({
  addEvent: (dayId) => dispatch(addEvent(dayId)),
  deleteEvent: (eventId, day) => dispatch(deleteEvent(eventId, day)),
});

function Day(props) {
  const eventArr = props.events.map((el, i) => (
    <Event
      key={`event ${i}`}
      time={el.timeStr}
      name={el.name}
      day={props.day}
      eventId={el.id}
      deleteEvent={props.deleteEvent}
    />
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
