import React from 'react';
import PropTypes from 'prop-types';

import './SplitInfo.css';

const SplitInfo = (props) => {

  return (
    <div>
      <h2 className="text-box">

        <div>Tax Amount: ${props.taxAmount}</div>
        <div>Tip Amount: ${props.tipAmount}</div>
        <div>Total Price: ${props.totalPrice}</div>
        <div>Price Per Person: ${props.pricePerHead}</div>

      </h2>
    </div>
  );
};

SplitInfo.propTypes = {
  taxAmount:PropTypes.number,
  tipAmount:PropTypes.number,
  totalPrice:PropTypes.number,
  pricePerHead:PropTypes.number
};

export default SplitInfo;
