import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="card shadow">
      <div className="card-body">
        <h3>Page not found!</h3>
        <p className="lead">This page your are trying to use does not exist.</p>
      </div>
      <div className="card-footer">
        <Link to="/" className="btn btn-primary">
          Back to home
        </Link>
      </div>
    </div>
  );
};
export default NotFound;
