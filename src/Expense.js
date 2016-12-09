import React, { Component } from 'react';

class Expense extends Component {
    render() {
        return (
          <div className="category">
            <h4 className="category__header">{this.props.category}</h4>
            <div className="ui icon huge input">
              <input className="category__header--essentials"
                     type="text"
                     placeholder={this.props.category}
              />
            </div>
          </div>
        );
    }

}

export default Expense;
