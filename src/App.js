import React, { Component } from 'react';
import Button from './Button';
import CategoryBuckets from './CategoryBuckets';
import constants from './constants';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
      salary: 0
    };
    Object.assign(this.state, constants);
    this.calculateBudget = this.calculateBudget.bind(this);
    this.getUserSalary = this.getUserSalary.bind(this);
  }

  getUserSalary(event) {
    const salary = +event.target.value;

    if(isNaN(salary)) {
      this.setState({
        salary: 0,
        error: true
      })
    } else {
      this.setState({
        salary: event.target.value,
        error: false
      })
    }
  }
  calculateBudget() {
    const salary = Number(this.state.salary);
    const essentials = (salary * constants.essentials).toFixed(1);
    const wants = (salary * constants.wants).toFixed(1);
    const savings = (salary * constants.savings).toFixed(1);
    this.setState({
      clicked: true,
      essentials: essentials,
      wants: wants,
      savings: savings
    });
  }

  render() {
    console.log(this.state.error);
    return (
      <div className="main">
        <div className="monthly__salary"> 
          <h2>What is your monthly salary? </h2>
          <div className={this.state.error ? "ui icon huge input error" : "ui icon huge input"}>
            <input type="text" placeholder="Monthly Salary" value={this.state.budget} onChange={this.getUserSalary}/>
            <Button onClick={this.calculateBudget} />
          </div>
        </div>
        {this.state.clicked ? <CategoryBuckets budget={this.state} /> : null}
      </div>
    );
  }
}

export default App;
