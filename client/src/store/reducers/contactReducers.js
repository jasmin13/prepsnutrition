import { CONTACT_DATA } from "./../actions/types";

const initialState = {
  data: []
};

const contactReducers = (state = initialState, action) => {
  switch (action.type) {
    case CONTACT_DATA:
      return {
        ...state,
        data: action.payload
      };

    default:
      return state;
  }
};
export default contactReducers;
