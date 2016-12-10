import React, { Component } from 'react';

class Expense extends Component {
    render() {
        const categoryHeaderClass = "category__header--" + this.props.category;
        return (
          <div className="category">
            <h4 className="category__header">{this.props.expense}</h4>
            <div className="ui icon huge input">
              <input className={categoryHeaderClass}
                     type="text"
                     placeholder={this.props.expense}
              />
            </div>
          </div>
        );
    }

}

export default Expense;
