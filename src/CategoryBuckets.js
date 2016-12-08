import React, { Component } from 'react';
import CategoryBucket from './CategoryBucket';
import './CategoryBuckets.css';


class CategoryBuckets extends Component {
  render() {
    return (
      <div>
        <h1>Rendering CategoryBucket.....</h1>
        <CategoryBucket essentials={this.props.budget.essentials} /> 
        <CategoryBucket wants={this.props.budget.wants} /> 
        <CategoryBucket savings={this.props.budget.savings} />


      </div>
    );
  }
}

export default CategoryBuckets;
