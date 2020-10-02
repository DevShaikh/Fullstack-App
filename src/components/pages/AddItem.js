import React from 'react';
import AddItemForm from '../layout/AddItemForm';

const AddItem = () => {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card shadow">
          <div className="card-body">
            <AddItemForm />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddItem;
