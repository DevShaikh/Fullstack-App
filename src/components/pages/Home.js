import React, {useContext, useEffect} from 'react';
import Records from '../records/Records';
import Search from '../layout/Search';
import Loading from '../layout/Loading';
import AppContext from '../../context/photostate/appContext';

const Home = () => {
  const appContext = useContext(AppContext);

  const {getRecords, records, loading} = appContext;

  useEffect(() => {
    getRecords();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="card shadow-sm">
        <div className="card-header d-flex justify-content-between">
          <h3 className="mb-0">Records List</h3>
          <Search />
        </div>
        <div className="card-body" style={{overflowX: 'scroll'}}>
          {records.length !== 0 ? (
            <table className="table table-hover" style={{minWidth: '1110px'}}>
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
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <Records />
              </tbody>
            </table>
          ) : (
            <h5 className="text-center">There is no record!</h5>
          )}
        </div>
      </div>
    );
  }
};
export default Home;
