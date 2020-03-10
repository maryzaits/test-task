import {
  GET_TASKS,
  GET_TASKS_SUCCESS,
  GET_TASKS_ERROR,
  SET_SEARCH_DATA
} from "../actions/constants";

const INITIAL_STATE = {
  loading: false,
  data: [],
  searchData: [],
  error: null
};

export default (state = INITIAL_STATE, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET_TASKS:
      return {
        ...state,
        loading: true
      };
    case GET_TASKS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload.data,
        searchData: payload.data
      };
    case GET_TASKS_ERROR:
      return { ...state, loading: false, error: payload.error };
    case SET_SEARCH_DATA:
      return { ...state, searchData: payload.searchData };
    default:
      return state;
  }
};
