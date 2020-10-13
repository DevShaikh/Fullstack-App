import React, {useContext, Fragment} from 'react';
import {Link} from 'react-router-dom';
import Carts from '../cart/Carts';
import TotalBill from '../cart/TotalBill';
import {FaShoppingCart} from 'react-icons/fa';
import {AiFillPrinter} from 'react-icons/ai';
import {IoMdArrowRoundBack} from 'react-icons/io';
import {FaRecycle} from 'react-icons/fa';
import AppContext from '../../context/photostate/appContext';

const Cart = () => {
  const appContext = useContext(AppContext);
  const {cartRecords, clearCart} = appContext;

  const clearCartClick = () => {
    if (window.confirm('Are you sure!')) {
      clearCart();
    }
  };

  return (
    <div className="card shadow">
      {' '}
      <div className="card-header mb-4">
        <h3 className="d-flex m-0 float-left" style={{alignItems: 'center'}}>
          <FaShoppingCart className="mr-2" />
          My Cart
        </h3>

        <button onClick={clearCartClick} className="btn btn-danger float-right">
          <FaRecycle /> Clear All
        </button>
      </div>
      <div className="card-body" style={{overflowX: 'scroll'}}>
        {cartRecords.length > 0 ? (
          <Fragment>
            <table className="table table-hover" style={{minWidth: '60%'}}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>School / Teacher Name</th>
                  <th>Class</th>
                  <th>Subject</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <Carts />
                <TotalBill items={cartRecords} />
              </tbody>
            </table>
            <div className="float-right">
              <Link
                to="/"
                className="btn btn-secondary mr-3"
                style={{width: '5.4rem'}}
              >
                <IoMdArrowRoundBack />
                Back
              </Link>
              <Link to="/cart/invoice" className="btn btn-info">
                <AiFillPrinter /> Checkout
              </Link>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <h4>Please add item to cart!</h4>
            <Link to="/" className="btn btn-info mt-3">
              Back to Records
            </Link>
          </Fragment>
        )}
      </div>
    </div>
  );
};
export default Cart;
