import React, { Component } from 'react';
import Expense from './Expense';
import MoneyLeft from './MoneyLeft';

import categories from './categories';
import './CategoryBuckets.css';


class SavingsBucket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moneyLeft: this.props.savings
    }
    this.onExpenseChanged = this.onExpenseChanged.bind(this);
  }
  onExpenseChanged(moneyLeft) {
    this.setState({ moneyLeft: moneyLeft });
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
    return (
          <div className="category__bucket col-md-3">
            <h2 className="category__bucket--header">{this.props.name} </h2> 
            <h3 className="category__bucket--number"><i className="dollar icon"></i>{this.props.savings}</h3>
            {categoryComponent}
            <h2>Left: {this.state.moneyLeft} </h2>

          </div>
    );
  }
}

export default SavingsBucket;
