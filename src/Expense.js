import React, { Component } from 'react';
import categories from './categories';

class Expense extends Component {
    render() {

        return (
          <div className="category">
            <h4 className="category__header">{this.props.expense}</h4>
            <div className="ui icon huge input">
              <input className="category__header--essentials"
                     type="text"
                     placeholder={this.props.expense}
              />
            </div>
          </div>
        );
    }

}

export default Expense;
