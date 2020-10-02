import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-warning mb-4 shadow-sm">
        <div className="container-fluid d-flex justify-content-start ">
          <a href="/" className="navbar-brand mr-4">
            Nabiha Photostate
          </a>
          <ul className="list-inline m-0 ml-sm-4">
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
        </div>
      </nav>
    </Fragment>
  );
};
export default Navbar;
