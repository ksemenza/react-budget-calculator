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
      compoundedMoneyLeft: compoundInterest(finance.compoundedRate, finance.compoundedTimes, this.props.wants, finance.years)

    }
    this.onExpenseChanged = this.onExpenseChanged.bind(this);
  }
  onExpenseChanged(moneyLeft) {
    this.setState({ 
      moneyLeft: moneyLeft,
      compoundedMoneyLeft: compoundInterest(finance.compoundedRate, finance.compoundedTimes, moneyLeft, finance.years)
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
            <MoneyLeft />
            <h2>Left: {this.state.moneyLeft} </h2>
            <h2>Compounded Money: {this.state.compoundedMoneyLeft} </h2>

          </div>
    );
  }
}

export default WantsBucket;
