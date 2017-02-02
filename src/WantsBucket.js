import React, { Component } from 'react';
import Expense from './Expense';
import MoneyLeft from './MoneyLeft';

import { compoundInterest } from './finance.js';
import categories from './categories';
import finance from './financialConstants';
import './CategoryBuckets.css';

class WantsBucket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moneyLeft: this.props.wants,
      compoundedMoneyLeft: compoundInterest(finance.compoundedRate, this.props.wants, finance.years, finance.contributions),
      moneyDiff: compoundInterest(finance.compoundedRate, this.props.wants, finance.years, finance.contributions)
    }
    this.onExpenseChanged = this.onExpenseChanged.bind(this);
  }
  onExpenseChanged(moneyLeft) {
    let compoundedMoneyLeft = compoundInterest(finance.compoundedRate, moneyLeft, finance.years, finance.contributions);
    let moneyDiff = (compoundedMoneyLeft - moneyLeft).toFixed(2);

    if (moneyDiff < 0) {
      moneyDiff = "You are in debt";
    }
    this.setState({ 
      moneyLeft: moneyLeft.toFixed(2),
      compoundedMoneyLeft: compoundedMoneyLeft,
      moneyDiff: moneyDiff
    });
  }
  render() {
    let wantsBudget = this.props.wants;
    let categoryComponent = categories.wants.map(expense => {
        return (<Expense expense={expense}
                         category="wants"
                         distribution={wantsBudget}
                         callbackParent={(moneyLeft) => this.onExpenseChanged(moneyLeft)}
                />);
    });
    return (
          <div className="category__bucket col-md-3">
            <h2 className="category__bucket--header">{this.props.name} </h2> 
            <h3 className="category__bucket--number"><i className="dollar icon"></i>{this.props.wants}</h3>
            {categoryComponent}
            <MoneyLeft moneyLeft={this.state.moneyLeft} 
                       compoundedMoneyLeft={this.state.compoundedMoneyLeft}
                       moneyDiff={this.state.moneyDiff}
            /> 
          </div>
    );
  }
}

export default WantsBucket;
