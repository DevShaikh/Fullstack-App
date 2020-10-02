import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import {FaArrowAltCircleLeft} from 'react-icons/fa';
import {RiAddCircleLine} from 'react-icons/ri';

import AppContext from '../../context/photostate/appContext';

const AddItemForm = () => {
  const appContext = useContext(AppContext);

  const {postRecord} = appContext;

  const [className, setClassName] = useState('');
  const [subjectName, setSubjectName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [pages, setPages] = useState('');
  const [pageSize, setPageSize] = useState('');
  const [printSide, setPrintSide] = useState('');
  const [binding, setBinding] = useState('');
  const [quantity, setQuantity] = useState('');
  const [rate, setRate] = useState('');

  const classChange = e => setClassName(e.target.value);
  const subjectChange = e => setSubjectName(e.target.value);
  const ownerChange = e => setOwnerName(e.target.value);
  const pagesChange = e => setPages(parseInt(e.target.value));
  const pageSizeChange = e => setPageSize(e.target.value);
  const printSideChange = e => setPrintSide(e.target.value);
  const bindingChange = e => setBinding(e.target.value);
  const quantityChange = e => setQuantity(parseInt(e.target.value));
  const rateChange = e => setRate(parseFloat(e.target.value));

  const record = {
    className,
    subjectName,
    ownerName,
    pages,
    pageSize,
    printSide,
    binding,
    quantity,
    rate,
    bill: (() => {
      if (binding !== 'No') {
        switch (pageSize) {
          case 'A4':
            return parseFloat(pages * rate * quantity + 30);
          case 'A5':
            return parseFloat(pages * rate * quantity + 20);
          case 'B5':
            return parseFloat(pages * rate * quantity + 30);
          case 'Legal':
            return parseFloat(pages * rate * quantity + 40);
          default:
            return 0;
        }
      } else {
        return parseFloat(pages * rate * quantity);
      }
    })(),
  };

  const addRecord = e => {
    e.preventDefault();
    postRecord(record);
    clearInputs(e);
  };

  const clearInputs = e => {
    e.target.reset();
    setPages('');
    setOwnerName('');
    setPageSize('');
    setBinding('');
    setQuantity('');
    setRate('');
  };
  return (
    <form onSubmit={addRecord}>
      <h2>Add Record</h2>
      <hr />
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="form-group">
            <label htmlFor="classDrop">
              <strong>Class Name</strong>
            </label>
            <select
              className="custom-select"
              id="classDrop"
              defaultValue={className}
              onChange={classChange}
              required
            >
              <option value="">Select Class</option>
              <option value="Class: IX">Class: IX</option>
              <option value="Class: X">Class: X</option>
              <option value="Class: XI">Class: XI</option>
              <option value="Class: XII">Class: XII</option>
            </select>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="form-group">
            <label htmlFor="subjectDrop">
              <strong>Subject Name</strong>
            </label>
            <select
              className="custom-select"
              id="subjectDrop"
              defaultValue={subjectName}
              required
              onChange={subjectChange}
            >
              <option value="">Select Subject</option>
              <option value="Urdu">Urdu</option>
              <option value="English">English</option>
              <option value="Math">Math</option>
              <option value="Chemistry">Chemistry</option>
              <option value="Physics">Physics</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Biology">Biology</option>
            </select>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="form-group">
            <label htmlFor="owner-name">
              <strong>School / Teacher Name</strong>
            </label>
            <input
              type="text"
              value={ownerName}
              className="form-control"
              placeholder="Type here..."
              id="owner-name"
              required
              onChange={ownerChange}
              autoComplete="off"
            />
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="form-group">
            <label htmlFor="pages">
              <strong>No. Pages</strong>
            </label>
            <input
              type="number"
              value={pages}
              className="form-control"
              placeholder="Type here..."
              id="pages"
              required
              onChange={pagesChange}
              autoComplete="off"
            />
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="form-group">
            <div className="form-group">
              <label htmlFor="sizeDrop">
                <strong>Page Size</strong>
              </label>
              <select
                className="custom-select"
                id="sizeDrop"
                defaultValue={pageSize}
                required
                onChange={pageSizeChange}
              >
                <option value="">Select Size</option>
                <option value="A4">A4</option>
                <option value="A5">A5</option>
                <option value="B5">B5</option>
                <option value="Legal">Legal</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="form-group">
            <div className="form-group">
              <label htmlFor="sideDrop">
                <strong>Print Side</strong>
              </label>
              <select
                className="custom-select"
                id="sideDrop"
                defaultValue={printSide}
                required
                onChange={printSideChange}
              >
                <option value="">Select Size</option>
                <option value="Single">Single</option>
                <option value="Double">Double</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="form-group">
            <label htmlFor="bindDrop">
              <strong>Binding</strong>
            </label>
            <select
              className="custom-select"
              id="bindDrop"
              defaultValue={binding}
              required
              onChange={bindingChange}
            >
              <option value="">Select Binding</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="form-group">
            <label htmlFor="quantity">
              <strong>Quantity</strong>
            </label>
            <input
              type="number"
              value={quantity}
              className="form-control"
              placeholder="Type here..."
              id="quantity"
              required
              onChange={quantityChange}
              autoComplete="off"
            />
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="form-group">
            <label htmlFor="rate">
              <strong>Rate</strong>
            </label>
            <input
              type="number"
              value={rate}
              className="form-control"
              placeholder="Type here..."
              id="rate"
              step="0.01"
              required
              onChange={rateChange}
              autoComplete="off"
            />
          </div>
        </div>
      </div>
      <Link to="/" className="btn btn-secondary mr-3 mt-2">
        <FaArrowAltCircleLeft className="text-light"></FaArrowAltCircleLeft>{' '}
        Back
      </Link>
      <button
        type="submit"
        value="Add item"
        className="btn btn-warning text-light px-3 mt-2"
      >
        <RiAddCircleLine></RiAddCircleLine> Add Record
      </button>
    </form>
  );
};
export default AddItemForm;
