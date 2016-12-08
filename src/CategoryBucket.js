import React, { Component } from 'react';


class CategoryBucket extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>CategoryBucket</h3>
        <h5>{this.props.essentials} </h5>
        <h5>{this.props.wants} </h5>
        <h5>{this.props.savings} </h5>
      </div>
    );
  }
}

export default CategoryBucket;
