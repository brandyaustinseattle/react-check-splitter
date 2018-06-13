import React from 'react';

import './CheckSplitterContainer.css';

import CheckForm from './CheckForm';
import SplitInfo from './SplitInfo';

const FORM_KEYS = ['subtotal', 'tip', 'tax', 'split'];

class CheckSplitterContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      subtotal: '0',
      tip: '20',
      tax: '10',
      split: '1',
    }
  }

  updateCheck = (key, value) => {
    if (!FORM_KEYS.includes(key)) {
      throw new Error(`Invalid key "${key}" passed in to updateCheck (value "${value}")`);
    }
    console.log(`Updating check, ${key}: ${value}`);
    const update = {}
    update[key] = value;
    this.setState(update);
  }

  calculateSplit() {
    let taxAmount = parseInt(this.state.subtotal) * (parseInt(this.state.tax)/100);
    let tipAmount = parseInt(this.state.subtotal) * (parseInt(this.state.tip)/100);
    let totalPrice = parseInt(this.state.subtotal) + taxAmount + tipAmount;
    let pricePerHead = totalPrice/parseInt(this.state.split);

    return {
      taxAmount: taxAmount,
      tipAmount: tipAmount,
      totalPrice: totalPrice,
      pricePerHead: pricePerHead
    }
  }

  render() {

    let details = this.calculateSplit();
    console.log('here');
    console.log(details);

    let taxAmount = details["taxAmount"];
    let tipAmount = details["tipAmount"];
    let totalPrice = details["totalPrice"];
    let pricePerHead = details["pricePerHead"];

    return(
      <div className="check-splitter-container">
        <CheckForm
          subtotal={this.state.subtotal}
          tip={this.state.tip}
          tax={this.state.tax}
          split={this.state.split}
          updateCheckCallback={this.updateCheck}
          />
        <SplitInfo taxAmount={taxAmount} tipAmount={tipAmount} totalPrice={totalPrice} pricePerHead={pricePerHead}/>
      </div>
    );
  }
}

export default CheckSplitterContainer;
