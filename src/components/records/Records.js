import React, {useContext, Fragment} from 'react';
import Record from './Record';
import AppContext from '../../context/photostate/appContext';

const Records = () => {
  const appContext = useContext(AppContext);

  const {records} = appContext;

  return (
    <Fragment>
      {records.map((record, id) => (
        <Record key={id} record={record} list_ID={id + 1} />
      ))}
    </Fragment>
  );
};
export default Records;
