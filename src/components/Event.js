import React from "react";

export default function Event(props) {
  return (
    <div>
      <label>Time: </label>
      <p>{props.time}</p>
      <label>Name: </label>
      <p>{props.name}</p>
      <button onClick={() => props.deleteEvent(props.eventId, props.day)}>
        X
      </button>
      <hr></hr>
    </div>
  );
}
