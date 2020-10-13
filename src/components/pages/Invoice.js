import React, {useContext} from 'react';
import {AiFillPrinter} from 'react-icons/ai';
import {IoMdArrowRoundBack} from 'react-icons/io';
import {Link} from 'react-router-dom';
import AppContext from '../../context/photostate/appContext';
import Invoices from '../invoice/Invoices';

export const Invoice = () => {
  const appContext = useContext(AppContext);

  const {totalAmount, discount} = appContext;

  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  function printDiv() {
    let printContents = document.getElementById('invoice').innerHTML;

    document.body.innerHTML = printContents;
    document.body.className = 'col-8 mx-auto';

    window.print();

    window.location.reload();
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-8 mx-auto">
          <div
            className="float-right"
            style={{
              position: 'absolute',
              top: '15px',
              right: '8%',
              zIndex: '9',
            }}
          >
            <Link
              to="/cart"
              className="btn btn-secondary mr-3"
              style={{width: '5.4rem'}}
            >
              <IoMdArrowRoundBack />
              Back
            </Link>
            <button
              className="btn btn-info"
              onClick={printDiv}
              style={{width: '5.4rem'}}
            >
              <AiFillPrinter /> Print
            </button>
          </div>
          <div id="invoice" className="card shadow">
            <div className="card-header">
              <h3>
                <strong>Invoice</strong>
              </h3>
            </div>
            <div className="card-body">
              <div className="row mb-4">
                <div className="col-sm-6">
                  <h6 className="mb-3">From:</h6>
                  <div>
                    <strong>M. Rehan Shaikh</strong>
                  </div>
                  <div>City: Hyderabad</div>
                  <div>Addres: House #123-A, Unit #10, latifabad</div>
                  <div>Email: m.rehanshaikh83@gmail.com</div>
                  <div>Phone: 03331231234</div>
                  <div>
                    Date:
                    {` ${date}-${month}-${year}`}
                  </div>
                </div>
              </div>

              <div className="table-responsive-sm">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>School / Teacher Name</th>
                      <th>Class</th>
                      <th>Subject</th>
                      <th>Quantity</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <Invoices />
                  </tbody>
                </table>
              </div>
              <div className="row">
                <div className="col-lg-4 col-sm-5"></div>

                <div className="col-lg-4 col-sm-5 ml-auto">
                  <table className="table table-clear">
                    <tbody>
                      <tr>
                        <td className="left">
                          <strong>Discount</strong>
                        </td>
                        <td className="right">Rs. {discount.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td className="left">
                          <strong>Total</strong>
                        </td>
                        <td className="right">
                          <strong>Rs. {totalAmount.toFixed(2)}</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="card-footer text-center">
              <strong className="m-0">Nabiha Photostate</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Invoice;
