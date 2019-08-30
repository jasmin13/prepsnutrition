import { combineReducers } from "redux";
import errorReducers from "./errorReducers";
import contactReducers from "./contactReducers";
import successReducer from "./successReducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  contacts: contactReducers,
  errors: errorReducers,
  success: successReducer,
  form: formReducer
});
