import React, {useContext} from 'react';
import AppContext from '../../context/photostate/appContext';

export const Alert = () => {
  const appContext = useContext(AppContext);
  const {alert} = appContext;

  return (
    alert !== null && (
      <div className={`alert alert-${alert.type} mb-3`}>{`${alert.msg}`}</div>
    )
  );
};
