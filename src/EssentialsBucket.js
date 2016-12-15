import React, { Component } from 'react';
import Expense from './Expense';
import MoneyLeft from './MoneyLeft';

import { compoundInterest } from './finance.js';
import finance from './financialConstants';
import categories from './categories';
import './CategoryBuckets.css';


class EssentialsBucket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moneyLeft: this.props.essentials,
      compoundedMoneyLeft: compoundInterest(finance.compoundedRate, this.props.essentials, finance.years)
    }

    this.onExpenseChanged = this.onExpenseChanged.bind(this);
  }

  onExpenseChanged(moneyLeft) {
    let compoundedMoneyLeft = compoundInterest(finance.compoundedRate, moneyLeft, finance.years);
    let percentIncrease = ((moneyLeft/compoundedMoneyLeft) * 100).toFixed(2);

    console.log(moneyLeft, compoundedMoneyLeft, percentIncrease);
    this.setState({ 
      moneyLeft: moneyLeft,
      compoundedMoneyLeft: compoundedMoneyLeft,
      percentIncrease: percentIncrease
    });

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

            <MoneyLeft moneyLeft={this.state.moneyLeft} /> 
            
            <div class="red statistic">
                <div class="value">
                  {this.state.moneyLeft}
                </div>
                <div class="label">
                  Money Left
                </div>
            </div>
            <h2>Compounded Money: {this.state.compoundedMoneyLeft}</h2>
            <h2>Percentage Increase: {this.state.percentIncrease}</h2>

            </div>
    );
  }
}

export default EssentialsBucket;
