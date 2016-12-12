import React, { Component } from 'react';
import $ from 'jquery';

class Expense extends Component {
    constructor(props) {
      super(props);
      this.addExpenses = this.addExpenses.bind(this);

    }
    addExpenses(event) {
      const essentialsExpenses = $('.category__header--essentials');
      const savingsExpenses = $('.category__header--savings');
      const wantsExpenses = $('.category__header--wants');
      let targetSum = this.props.distribution;
      let expenses; 
      switch (this.props.category) {
        case 'essentials':
          expenses = essentialsExpenses;
          break;
        case 'savings':
          expenses = savingsExpenses;
          break;
        case 'wants':
          expenses = wantsExpenses;
          break;
        default:
          console.log("Props category does not exist");
      }
      $.each(expenses, function(element, input) {
        targetSum -= Number(input.value);
      });
      console.log(targetSum);
    }
    render() {
      const categoryHeaderClass = "category__header--" + this.props.category;
      return (
        <div className="category">
          <h4 className="category__header">{this.props.expense}</h4>
          <div className="ui icon huge input">
            <input className={categoryHeaderClass}
                   type="text"
                   placeholder={this.props.expense}
                   onChange={this.addExpenses}
            />
          </div>
        </div>
      );
    }

}

export default Expense;
