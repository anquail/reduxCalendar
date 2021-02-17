import * as types from "../actions/actionTypes";

const initialState = {
  sunday: [],
  monday: [],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [],
  saturday: [],
  eventId: 0,
};

const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_EVENT: {
      let newArr = [...state[action.payload.day]];
      const eventObj = { ...action.payload, id: state.eventId };
      newArr.push(eventObj);

      return {
        ...state,
        [action.payload.day]: newArr,
        eventId: state.eventId + 1,
      };
    }

    default: {
      console.log("calendar reducer fired");
      return state;
    }
  }
};

export default calendarReducer;
