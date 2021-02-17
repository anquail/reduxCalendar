import * as types from "./actionTypes";

export const addEvent = (dayId) => ({
  //
  type: types.ADD_EVENT,
  payload: { timeStr: "2:00PM", name: "Learn REDUX", day: dayId },
});

export const deleteEvent = () => {
  //
};
