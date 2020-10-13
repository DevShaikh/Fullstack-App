import React, {useContext, useEffect, useState} from 'react';
import {Fragment} from 'react';
import AppContext from '../../context/photostate/appContext';

const TotalBill = () => {
  const appContext = useContext(AppContext);
  const {totalAmount, calcTotalAmount} = appContext;

  const [disc, setDisc] = useState(0);

  useEffect(() => {
    calcTotalAmount();
    // eslint-disable-next-line
  }, []);

  const quantityChange = e => {
    setDisc(parseInt(e.target.value));
    calcTotalAmount(parseInt(e.target.value));
  };

  return (
    <Fragment>
      <tr>
        <td className="border-0"></td>
        <td className="border-0"></td>
        <td className="border-0"></td>
        <td className="border-0"></td>
        <th>Discount %</th>
        <th>Total</th>
      </tr>

      <tr>
        <td className="border-0"></td>
        <td className="border-0"></td>
        <td className="border-0"></td>
        <td className="border-0"></td>
        <td>
          <input
            type="number"
            value={disc}
            className="form-control"
            placeholder="Type here..."
            id="quantity"
            onChange={quantityChange}
            autoComplete="off"
            min={0}
            style={{
              width: '80px',
            }}
          />
        </td>
        <td>Rs. {totalAmount.toFixed(2)}</td>
      </tr>
    </Fragment>
  );
};
export default TotalBill;
