import React, { Component } from 'react';
import categories from './categories';
import './CategoryBuckets.css';


class SavingsBucket extends Component {
  render() {
    return (
          <div className="category__bucket col-md-3">
            <h2 className="category__bucket--header">{this.props.name} </h2> 
            <h3 className="category__bucket--number">{this.props.savings}</h3>
            <div className="ui icon large input">
              <input type="text" placeholder="Value here"/>
            </div>
          </div>
    );
  }
}

export default SavingsBucket;
