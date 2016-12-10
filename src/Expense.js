import React, { Component } from 'react';

class Expense extends Component {
    constructor() {
        super();
        this.state = {
            essentialsTotal: 0,
            wantsTotal: 0,
            savingsTotal: 0
        };
    }
    addSum(event) {
        console.log(event.target.value);
        this.setState({
            essentialsTotal: 
            wantsTotal:
            savingsTotal:
        })
    }
    render() {
        const categoryHeaderClass = "category__header--" + this.props.category;
        return (
          <div className="category">
            <h4 className="category__header">{this.props.expense}</h4>
            <div className="ui icon huge input">
              <input className={categoryHeaderClass}
                     type="text"
                     placeholder={this.props.expense}
                     onChange={this.addSum}
              />
            </div>
          </div>
        );
    }

}

export default Expense;
