import React, { Component } from 'react';
import Expense from './Expense';
import categories from './categories';
import './CategoryBuckets.css';


class SavingsBucket extends Component {

  render() {
    let categoryComponent = categories.savings.map(function(category) {
        return (<Expense category={category} />);
    });
    return (
          <div className="category__bucket col-md-3">
            <h2 className="category__bucket--header">{this.props.name} </h2> 
            <h3 className="category__bucket--number"><i className="dollar icon"></i>{this.props.savings}</h3>
            {categoryComponent}
          </div>
    );
  }
}

export default SavingsBucket;
