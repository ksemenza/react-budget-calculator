import React, { Component } from 'react';
import './CategoryBuckets.css';


class CategoryBuckets extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      salary, 
      essentials,
      wants,
      needs
    } = this.props;
    console.log(this.props);
    return (
      <div>
        <h1>Rendering CategoryBucket.....</h1>
        <CategoryBucket /> 
        <CategoryBucket /> 
        <CategoryBucket />
        {this.props.budget.salary}

      </div>
    );
  }
}

export default CategoryBuckets;
