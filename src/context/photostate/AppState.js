import React, {useEffect, useReducer} from 'react';
import axios from 'axios';
import AppContext from './appContext';
import AppReducer from './appReducer';
import {
  GET_RECORDS,
  SET_ALERT,
  SEARCH_RECORDS,
  SET_LOADING,
  DELETE_CART,
  ADD_CART,
  CALC_TOTAL_AMOUNT,
  DISCOUNT,
} from '../types';

const AppState = props => {
  const initState = {
    records: [],
    cartRecords: [],
    totalAmount: 0,
    discount: 0,
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

  const addToCart = id => {
    let matched = false;
    const already = () => {
      if (state.cartRecords.length > 0) {
        for (let i = 0; i < state.cartRecords.length; i++) {
          if (state.cartRecords[i].id === id) {
            matched = true;
            break;
          } else {
            matched = false;
          }
        }
      } else {
        matched = false;
      }
    };
    already();

    if (!matched) {
      state.cartRecords.push(state.records[id - 1]);

      dispatch({type: ADD_CART, payload: state.cartRecords});
      localStorage.setItem('cartRecords', JSON.stringify(state.cartRecords));

      dispatch({
        type: SET_ALERT,
        payload: {msg: 'Record added to cart!', type: 'success'},
      });
      setTimeout(() => {
        dispatch({
          type: SET_ALERT,
          payload: null,
        });
      }, 3000);
    } else {
      dispatch({
        type: SET_ALERT,
        payload: {msg: 'Record is already in cart!', type: 'warning'},
      });
      setTimeout(() => {
        dispatch({
          type: SET_ALERT,
          payload: null,
        });
      }, 3000);
    }
  };
  const deleteFromCart = id => {
    state.cartRecords.splice(id - 1, 1);

    dispatch({type: DELETE_CART, payload: state.cartRecords});
    localStorage.setItem('cartRecords', JSON.stringify(state.cartRecords));

    calcTotalAmount();

    dispatch({
      type: SET_ALERT,
      payload: {msg: 'Record removed from cart!', type: 'success'},
    });
    setTimeout(() => {
      dispatch({
        type: SET_ALERT,
        payload: null,
      });
    }, 3000);
  };

  const editCart = (id, quantity) => {
    const {rate, pages, binding, pageSize} = state.cartRecords[id - 1];
    console.log();

    state.cartRecords[id - 1].quantity = quantity;

    state.cartRecords[id - 1].bill = (() => {
      if (binding !== 'No') {
        switch (pageSize) {
          case 'A4':
            return pages * rate * quantity + 30;
          case 'A5':
            return pages * rate * quantity + 20;
          case 'B5':
            return pages * rate * quantity + 30;
          case 'Legal':
            return pages * rate * quantity + 40;
          default:
            return 0;
        }
      } else {
        return pages * rate * quantity;
      }
    })();
    dispatch({type: ADD_CART, payload: state.cartRecords});
    localStorage.setItem('cartRecords', JSON.stringify(state.cartRecords));
  };

  const calcTotalAmount = discount => {
    let total = 0;
    let disc;
    if (state.cartRecords.length > 0) {
      state.cartRecords.forEach(item => (total += item.bill));

      if (discount > 0) {
        disc = (total * discount) / 100;
        total -= (total * discount) / 100;
        dispatch({type: CALC_TOTAL_AMOUNT, payload: total});
        dispatch({type: DISCOUNT, payload: disc});
      } else {
        dispatch({type: CALC_TOTAL_AMOUNT, payload: total});
      }
    }
  };

  // eslint-disable-next-line
  const clearCart = () => {
    dispatch({type: DELETE_CART, payload: []});
    localStorage.setItem('cartRecords', JSON.stringify([]));

    dispatch({
      type: SET_ALERT,
      payload: {msg: 'Cart items has been removed', type: 'success'},
    });
    setTimeout(() => {
      dispatch({
        type: SET_ALERT,
        payload: null,
      });
    }, 3000);
  };

  useEffect(() => {
    const records = JSON.parse(localStorage.getItem('cartRecords'));
    if (records !== null) {
      dispatch({type: ADD_CART, payload: records});
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        records: state.records,
        cartRecords: state.cartRecords,
        totalAmount: state.totalAmount,
        discount: state.discount,
        loading: state.loading,
        alert: state.alert,
        getRecords,
        postRecord,
        deleteRecord,
        searchRecords,
        clearSearch,
        addToCart,
        deleteFromCart,
        editCart,
        calcTotalAmount,
        clearCart,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default AppState;
