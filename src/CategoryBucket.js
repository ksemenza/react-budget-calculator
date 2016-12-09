import React, { Component } from 'react';
import './CategoryBuckets.css';


class CategoryBucket extends Component {
  render() {
    return (
          <div className="category__bucket col-md-3">
            <h3 className="category__bucket--header">{this.props.name} </h3> 
            <h3 className="category__bucket--number">{this.props.essentials} {this.props.wants} {this.props.savings}</h3>
          </div>
    );
  }
}

export default CategoryBucket;
