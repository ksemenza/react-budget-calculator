import React, { Component } from 'react';
import './CategoryBuckets.css';


class MoneyLeft extends Component {
  render () {
    return (
      <div className="money_left__divider">
        <h4 className="ui horizontal divider header">
          <i className="bar chart icon"></i>
          Remainder of Budget
        </h4>
        <div className="ui horizontal statistic">
          <div className="value">
            {this.props.moneyLeft}
          </div>
          <div className="label">
            Money Left
          </div>
        </div>

        <div className="ui horizontal statistic">
          <div className="value">
            {this.props.compoundedMoneyLeft}
          </div>
          <div className="label">
            Compound Interest (20 years)
          </div>
        </div>

        <div className="ui horizontal statistic">
          <div className="value">
            {this.props.moneyDiff}
          </div>
          <div className="label">
            Money Earned
          </div>
        </div>
      </div>
    );
  }
}

export default MoneyLeft; 
