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
            2,204
          </div>
          <div className="label">
            Views
          </div>
        </div>
      </div>
    );
  }
}

export default MoneyLeft; 
