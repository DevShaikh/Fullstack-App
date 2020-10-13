import React, {Fragment, useContext} from 'react';
import {Link} from 'react-router-dom';
import {FaShoppingCart} from 'react-icons/fa';
import AppContext from '../../context/photostate/appContext';

const Navbar = () => {
  const appContext = useContext(AppContext);
  const {cartRecords} = appContext;

  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-warning mb-4 shadow-sm">
        <div className="container-fluid d-flex justify-content-between ">
          <a href="/" className="navbar-brand m-0">
            Nabiha Photostate
          </a>
          <ul className="list-inline m-0 m-0">
            <li className="list-inline-item">
              <Link
                to="/"
                className="text-light mx-1"
                style={{textDecoration: 'none'}}
              >
                Home
              </Link>
            </li>
            <li className="list-inline-item">
              <Link
                to="/add_record"
                className="text-light mx-1"
                style={{textDecoration: 'none'}}
              >
                Add Record
              </Link>
            </li>
            <li className="list-inline-item">
              <Link
                to="/about"
                className="text-light mx-1"
                style={{textDecoration: 'none'}}
              >
                About
              </Link>
            </li>
          </ul>
          <Link to="/cart" className="btn btn-warning">
            <FaShoppingCart
              className="text-light mr-1"
              style={{fontSize: '1.6rem'}}
            />
            {cartRecords.length > 0 && (
              <span className="badge badge-danger text-light">
                {cartRecords.length}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </Fragment>
  );
};
export default Navbar;
