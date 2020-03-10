import {
  GET_TASKS,
  GET_TASKS_SUCCESS,
  GET_TASKS_ERROR,
  SET_SEARCH_DATA
} from "./constants";
import axios from "axios";

export const getTasks = cb => dispatch => {
  dispatch({ type: GET_TASKS });
  axios
    .get("http://www.mocky.io/v2/5e6774e73100008500230960")
    .then(res => {
      cb(res.data);
      dispatch(getTasksSuccess(res.data));
    })
    .catch(error => {
      dispatch(getTasksError(error));
    });
};

export const getTasksSuccess = data => ({
  type: GET_TASKS_SUCCESS,
  payload: { data }
});

export const getTasksError = error => ({
  type: GET_TASKS_ERROR,
  payload: { error }
});

export const setSearchData = searchData => {
  return {
    type: SET_SEARCH_DATA,
    payload: { searchData }
  };
};
