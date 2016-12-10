import React, { Component } from 'react';
import Expense from './Expense';

import categories from './categories';
import './CategoryBuckets.css';


class EssentialsBucket extends Component {

  render() {
    let categoryComponent = categories.essentials.map(function(expense) {
        return (<Expense expense={expense} category="essentials" />);
    });
    return (
          <div className="category__bucket col-md-3">
            <h2 className="category__bucket--header">{this.props.name} </h2> 
            <h3 className="category__bucket--number"><i className="dollar icon"></i>{this.props.essentials}</h3>
            {categoryComponent}
            <h3>Left: </h3>
          </div>
    );
  }
}

export default EssentialsBucket;
