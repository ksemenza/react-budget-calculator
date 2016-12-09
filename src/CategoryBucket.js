import React, { Component } from 'react';


class CategoryBucket extends Component {
  render() {
    return (
      <div>
      <div class="ui card">
        <div class="content">
          <div class="header">Cute Dog</div>
          <div class="meta">2 days ago</div>
          <div class="description">
            <p>Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.</p>
            <p>Many people also have their own barometers for what makes a cute dog.</p>
          </div>
        </div>
        <div class="extra content">
          <i class="check icon"></i>
          121 Votes
        </div>
      </div>
        <h3>{this.props.name} CategoryBucket</h3>
        <h5>{this.props.essentials} </h5>
        <h5>{this.props.wants} </h5>
        <h5>{this.props.savings} </h5>
      </div>
    );
  }
}

export default CategoryBucket;
