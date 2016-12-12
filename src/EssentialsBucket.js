import React, { Component } from 'react';
import Expense from './Expense';

import Finance from './finance.js'
import categories from './categories';
import './CategoryBuckets.css';


class EssentialsBucket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moneyLeft: this.props.essentials
    }
    this.onExpenseChanged = this.onExpenseChanged.bind(this);
  }

  //Compound Interest (CI)
  // finance.CI(rate, compoundings per period, principal, number of periods);
  onExpenseChanged(moneyLeft) {
    this.setState({ moneyLeft: moneyLeft });
    this.calculateCompountInterest(this.props.essentials);
  }
  calculateCompountInterest(essentials) {
    let compoundedInterest = Finance.CI(5.0, 1 ,essentials, 1);
    console.log(compoundedInterest);
  }
  render() {
    let essentialsBudget = this.props.essentials;
    let categoryComponent = categories.essentials.map(expense => {
        return (<Expense expense={expense} 
                         category="essentials" 
                         distribution={essentialsBudget} 
                         callbackParent={(moneyLeft) => this.onExpenseChanged(moneyLeft) } />);
    });
    return (
          <div className="category__bucket col-md-3">
            <h2 className="category__bucket--header">{this.props.name} </h2> 
            <h3 className="category__bucket--number"><i className="dollar icon"></i>{this.props.essentials}</h3>
            {categoryComponent}
            <h2>Left: {this.state.moneyLeft} </h2>
          </div>
    );
  }
}

export default EssentialsBucket;
