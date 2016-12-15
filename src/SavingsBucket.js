import React, { Component } from 'react';
import Expense from './Expense';
import MoneyLeft from './MoneyLeft';

import { compoundInterest } from './finance.js';

import categories from './categories';
import finance from './financialConstants';
import './CategoryBuckets.css';


class SavingsBucket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moneyLeft: this.props.savings,
      compoundedMoneyLeft: compoundInterest(finance.compoundedRate, finance.compoundedTimes, this.props.savings, finance.years)
    }
    this.onExpenseChanged = this.onExpenseChanged.bind(this);
  }
  onExpenseChanged(moneyLeft) {
    this.setState({ 
      moneyLeft: moneyLeft,
      compoundedMoneyLeft: compoundInterest(finance.compoundedRate, finance.compoundedTimes, moneyLeft, finance.years)
    });
  }
  calculatePercentIncrease(moneyLeft, compoundedMoneyLeft) {
    console.log(moneyLeft, compoundedMoneyLeft);
    let percentIncrease = ((moneyLeft/compoundedMoneyLeft) * 100).toFixed(2);
    console.log(percentIncrease);
    this.setState({
      percentIncrease: percentIncrease
    });
  }
  render() {
    let savingsBudget = this.props.savings;
    let categoryComponent = categories.savings.map(expense => {
      return (<Expense expense={expense}
                       category="savings"
                       distribution={savingsBudget}
                       callbackParent={(moneyLeft) => this.onExpenseChanged(moneyLeft)}
              />);
    });
    let moneyLeft = this.state.moneyLeft;
    let compoundedMoneyLeft = this.state.compoundedMoneyLeft;
    return (
          <div className="category__bucket col-md-3">
            <h2 className="category__bucket--header">{this.props.name} </h2> 
            <h3 className="category__bucket--number"><i className="dollar icon"></i>{this.props.savings}</h3>
            {categoryComponent}
            <MoneyLeft /> 
            <h2>Savings: {this.state.moneyLeft} </h2>
            <h2>Savings after 20 years of Compound Interest: {this.state.compoundedMoneyLeft} </h2>
            <h2>Percentage Increase: {this.state.percentIncrease}</h2>
          </div>
    );
  }
}

export default SavingsBucket;
