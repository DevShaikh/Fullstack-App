import React from 'react';
import {Fragment} from 'react';

const InvoiceItem = ({list_ID, item}) => {
  const {className, subjectName, ownerName, quantity, bill} = item;

  return (
    <Fragment>
      <tr>
        <th scope="row">{list_ID}</th>
        <td>{ownerName}</td>
        <td>{className}</td>
        <td>{subjectName}</td>
        <td>{quantity}</td>
        <td>Rs. {bill.toFixed(2)}</td>
      </tr>
    </Fragment>
  );
};
export default InvoiceItem;
