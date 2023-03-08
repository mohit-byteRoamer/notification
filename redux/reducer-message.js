// Import the SET_MESSAGE action type
import {SET_MESSAGE} from './constant';

// Define the default state for the message
const initialState = {
  message: '',
};

// Define the message reducer
const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default messageReducer;
