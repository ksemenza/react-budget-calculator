import React, { Component } from 'react';
import Expense from './Expense';
import MoneyLeft from './MoneyLeft';

import { compoundInterest } from './finance.js';
import categories from './categories';
import './CategoryBuckets.css';


class EssentialsBucket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moneyLeft: this.props.essentials,
      compoundedMoneyLeft: compoundInterest(6, 1, this.props.essentials, 20)
    }

    this.onExpenseChanged = this.onExpenseChanged.bind(this);
  }

  //Compound Interest (CI)
  onExpenseChanged(moneyLeft) {
    this.setState({ moneyLeft: moneyLeft });
  }

  calculateCompountInterest(essentials) {
    console.log("hi");
    console.log(compoundInterest(5.5, 1, 1000, 20));
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
            
            <h2>Left: {this.state.moneyLeft} </h2>
            <h2>Compounded Money: {this.state.compoundedMoneyLeft} </h2>

            </div>
    );
  }
}

export default EssentialsBucket;
