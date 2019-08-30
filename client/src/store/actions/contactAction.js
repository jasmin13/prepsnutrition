import axios from "axios";
import { GET_ERRORS, ADD_DATA_SUCCESS } from "./types";

export const getContactData = contactData => dispatch => {
  axios
    .post("/contact", contactData)
    .then(res => {
      if (res.status === 200) {
        dispatch({
          type: ADD_DATA_SUCCESS,
          payload: res.data
        });
      } else {
        dispatch({
          type: GET_ERRORS,
          payload: res.data
        });
      }
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err
      });
    });
};
