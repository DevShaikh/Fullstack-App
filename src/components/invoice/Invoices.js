import React, {useContext, Fragment} from 'react';
import AppContext from '../../context/photostate/appContext';
import InvoiceItem from './InvoiceItem';

const Invoices = () => {
  const appContext = useContext(AppContext);

  const {cartRecords} = appContext;

  return (
    <Fragment>
      {cartRecords.map((record, id) => (
        <InvoiceItem key={id} item={record} list_ID={id + 1} />
      ))}
    </Fragment>
  );
};
export default Invoices;
