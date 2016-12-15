import React, { Component } from 'react';


class MoneyLeft extends Component {
  render () {
    return (
      <div>
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
            Compounded Money after 20 years
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
