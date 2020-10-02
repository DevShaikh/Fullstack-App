import React, {useContext, useEffect} from 'react';
import Records from '../records/Records';
import Search from '../layout/Search';
import Loading from '../layout/Loading';
import AppContext from '../../context/photostate/appContext';
import {FaRecycle} from 'react-icons/fa';

const Home = () => {
  const appContext = useContext(AppContext);

  const {getRecords, clearRecords, records, loading} = appContext;

  useEffect(() => {
    getRecords();
    // eslint-disable-next-line
  }, []);

  const clearRecordsClick = () => {
    if (window.confirm('Are you sure!\nThis will no revert.')) {
      clearRecords();
    }
  };

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="card shadow-sm">
        <div className="card-header d-flex justify-content-between">
          <h3 className="mb-0">Records List</h3>
          {records.length > 0 && (
            <button
              className="btn btn-danger"
              onClick={clearRecordsClick}
              style={{width: '150px'}}
            >
              <FaRecycle></FaRecycle>&nbsp;Clear All
            </button>
          )}
        </div>
        <Search />
        <div className="card-body" style={{overflowX: 'scroll'}}>
          {records.length !== 0 ? (
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Class</th>
                  <th>Subject</th>
                  <th>School / Teacher Name</th>
                  <th>No. Pages</th>
                  <th>Page Size</th>
                  <th>Print Side</th>
                  <th>Binding</th>
                  <th>Quantity</th>
                  <th>Rate</th>
                  <th>Bill</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <Records />
              </tbody>
            </table>
          ) : (
            <h5 className="text-center">
              There is no record added! Please add some records.
            </h5>
          )}
        </div>
      </div>
    );
  }
};
export default Home;
