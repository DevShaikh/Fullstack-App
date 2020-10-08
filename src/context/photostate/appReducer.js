import {
  DELETE_RECORD,
  GET_RECORDS,
  SET_ALERT,
  SET_LOADING,
  SEARCH_RECORDS,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_RECORDS:
      return {
        ...state,
        records: action.payload,
      };
    case DELETE_RECORD:
      return {
        ...state,
        records: action.payload,
      };
    case SEARCH_RECORDS:
      return {
        ...state,
        records: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_ALERT:
      return {
        ...state,
        alert: action.payload,
      };
    default:
      return state;
  }
};
