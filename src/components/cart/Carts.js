import React, {Fragment, useContext} from 'react';
import CartRecord from './CartRecord';
import AppContext from '../../context/photostate/appContext';

const Carts = () => {
  const appContext = useContext(AppContext);
  const {cartRecords} = appContext;
  return (
    <Fragment>
      {cartRecords.map((record, id) => (
        <CartRecord key={id} cartItem={record} list_ID={id + 1} />
      ))}
    </Fragment>
  );
};
export default Carts;
