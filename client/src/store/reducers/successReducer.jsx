import { ADD_DATA_SUCCESS } from "../actions/types";

const initialState = {};

const successReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default successReducer;
