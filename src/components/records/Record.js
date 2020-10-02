import React, {useContext} from 'react';
import {MdDelete} from 'react-icons/md';
import AppContext from '../../context/photostate/appContext';

const Record = ({list_ID, record}) => {
  const appContext = useContext(AppContext);

  const {deleteRecord} = appContext;

  const deleteRecordClick = e => {
    const getID = parseInt(e.target.parentElement.parentElement.id);
    if (isNaN(getID) === false) {
      const agreed = window.confirm('Are you sure!');
      if (agreed) {
        deleteRecord(getID);
      }
    }
  };

  const {
    id,
    className,
    subjectName,
    ownerName,
    pages,
    printSide,
    pageSize,
    binding,
    quantity,
    rate,
    bill,
  } = record;

  return (
    <tr>
      <th scope="row">{list_ID}</th>
      <td>{className}</td>
      <td>{subjectName}</td>
      <td>{ownerName}</td>
      <td>{pages}</td>
      <td>{pageSize}</td>
      <td>{printSide}</td>
      <td>{binding}</td>
      <td>{quantity}</td>
      <td>{rate}</td>
      <td>Rs. {bill.toFixed(2)}</td>
      <td>
        <div id={id} className="d-flex justify-content-center text-danger">
          <MdDelete
            style={{cursor: 'pointer', fontSize: '1.5rem'}}
            onClick={deleteRecordClick}
          />
        </div>
      </td>
    </tr>
  );
};
export default Record;
