import React, { Component } from 'react';
import categories from './categories';
import './CategoryBuckets.css';

class WantsBucket extends Component {
  render() {
    let categoryComponent = categories.wants.map(function(category) {
        return (
          <div className="category">
            <h4>{category}</h4>
            <div className="ui icon large input">
              <input type="text" placeholder="Value here"/>
            </div>
          </div>
        );
    }); 
    return (
          <div className="category__bucket col-md-3">
            <h2 className="category__bucket--header">{this.props.name} </h2> 
            <h3 className="category__bucket--number">{this.props.wants}</h3>
            {categoryComponent}
          </div>
    );
  }
}

export default WantsBucket;
