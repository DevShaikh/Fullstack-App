import React, {useReducer} from 'react';
import axios from 'axios';
import AppContext from './appContext';
import AppReducer from './appReducer';
import {
  GET_RECORDS,
  DELETE_RECORD,
  SET_ALERT,
  CLEAR_RECORDS,
  SEARCH_RECORDS,
  SET_LOADING,
} from '../types';

const AppState = props => {
  const initState = {
    records: [],
    loading: false,
    alert: null,
  };

  const [state, dispatch] = useReducer(AppReducer, initState);

  const getRecords = async () => {
    dispatch({type: SET_LOADING, payload: true});

    const res = await axios.get('http://localhost:8850/records');

    dispatch({
      type: GET_RECORDS,
      payload: res.data,
    });
    dispatch({type: SET_LOADING, payload: false});
  };

  const searchRecords = async text => {
    dispatch({type: SET_LOADING, payload: true});

    const res = await axios.get(`http://localhost:8850/records?q=${text}`);
    if (res.data === []) {
      dispatch({
        type: SET_ALERT,
        payload: {msg: 'Nothing Matched!', type: 'danger'},
      });
      setTimeout(() => {
        dispatch({
          type: SET_ALERT,
          payload: null,
        });
      }, 3000);
    } else {
      dispatch({
        type: SEARCH_RECORDS,
        payload: res.data,
      });
    }

    dispatch({type: SET_LOADING, payload: false});
  };

  const clearSearch = async text => {
    dispatch({type: SET_LOADING, payload: true});
    const res = await axios.get(`http://localhost:8850/records`);

    dispatch({
      type: GET_RECORDS,
      payload: res.data,
    });
    dispatch({type: SET_LOADING, payload: false});
  };

  const postRecord = async record => {
    dispatch({type: SET_LOADING, payload: true});

    await axios.post('http://localhost:8850/records', record);

    dispatch({type: SET_LOADING, payload: false});
    dispatch({
      type: SET_ALERT,
      payload: {msg: 'Record Added!', type: 'success'},
    });
    setTimeout(() => {
      dispatch({
        type: SET_ALERT,
        payload: null,
      });
    }, 3000);
  };

  const deleteRecord = async id => {
    await axios.delete(`http://localhost:8850/records/${id}`);

    state.records.splice(id, 1);

    dispatch({type: DELETE_RECORD, payload: state.records});
    dispatch({
      type: SET_ALERT,
      payload: {msg: 'Record deleted!', type: 'success'},
    });
    setTimeout(() => {
      dispatch({
        type: SET_ALERT,
        payload: null,
      });
    }, 3000);
    getRecords();
  };

  const clearRecords = async () => {
    dispatch({type: SET_LOADING, payload: true});

    state.records.forEach(async record => {
      await axios.delete(`http://localhost:8850/records/${record.id}`);
    });

    dispatch({
      type: CLEAR_RECORDS,
    });
    dispatch({
      type: SET_ALERT,
      payload: {msg: 'Records has been cleared!', type: 'success'},
    });
    setTimeout(() => {
      dispatch({
        type: SET_ALERT,
        payload: null,
      });
    }, 3000);
    dispatch({type: SET_LOADING, payload: false});
  };

  return (
    <AppContext.Provider
      value={{
        records: state.records,
        record: state.record,
        loading: state.loading,
        alert: state.alert,
        getRecords,
        postRecord,
        deleteRecord,
        clearRecords,
        searchRecords,
        clearSearch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default AppState;
