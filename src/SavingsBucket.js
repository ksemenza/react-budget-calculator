import React, { Component } from 'react';
import categories from './categories';
import './CategoryBuckets.css';


class SavingsBucket extends Component {

  render() {
    let categoryComponent = categories.savings.map(function(category) {
        return (
          <div className="category">
            <h4 className="category__header">{category}</h4>
            <div className="ui icon huge input">
              <input className="category__header--essentials"
                     type="text"
                     placeholder={category}
              />
            </div>
          </div>
        );
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
