import React, {useContext} from 'react';
import {Fragment} from 'react';
import {MdDelete} from 'react-icons/md';
import AppContext from '../../context/photostate/appContext';

const CartRecord = ({list_ID, cartItem}) => {
  const appContext = useContext(AppContext);
  const {deleteFromCart, calcTotalAmount, editCart} = appContext;

  const {className, subjectName, ownerName, quantity, bill} = cartItem;

  const quantityChange = e => {
    editCart(parseInt(e.target.id), parseInt(e.target.value));
    calcTotalAmount();
  };

  const deleteCartClick = e => {
    const getID = parseInt(e.target.parentElement.parentElement.id);
    if (isNaN(getID) === false) {
      if (window.confirm('Are you sure')) {
        deleteFromCart(getID);
      }
    }
  };

  return (
    <Fragment>
      <tr>
        <th scope="row">{list_ID}</th>
        <td>{ownerName}</td>
        <td>{className}</td>
        <td>{subjectName}</td>
        <td>
          <input
            type="number"
            value={quantity}
            className="form-control"
            placeholder="Type here..."
            id="quantity"
            onChange={quantityChange}
            autoComplete="off"
            min={1}
            style={{
              width: '80px',
            }}
            // eslint-disable-next-line
            id={list_ID}
          />
        </td>
        <td>Rs. {bill.toFixed(2)}</td>
        <td>
          <div
            id={list_ID}
            className="d-flex justify-content-center text-danger"
          >
            <MdDelete
              style={{cursor: 'pointer', fontSize: '1.5rem'}}
              onClick={deleteCartClick}
            />
          </div>
        </td>
      </tr>
    </Fragment>
  );
};
export default CartRecord;
