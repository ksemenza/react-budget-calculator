import React, { Component } from 'react';
import Button from './Button';
import CategoryBuckets from './CategoryBuckets';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
      salary: 0
    };
    this.calculateBudget = this.calculateBudget.bind(this);
    this.getUserSalary = this.getUserSalary.bind(this);
  }

  getUserSalary(event) {
    this.setState({
      salary: event.target.value
    })
  }
  calculateBudget() {
    this.setState({
      clicked: true
    });
  }

  render() {
    return (
      <div className="main">
        <div className="monthly__salary"> 
          <h2>What is your monthly salary? </h2>
          <div className="ui icon input">
            <input type="text" placeholder="Monthly Salary" value={this.state.budget} onChange={this.getUserSalary}/>
            <Button onClick={this.calculateBudget} />
          </div>
        </div>
        {this.state.clicked ? <CategoryBuckets salary={this.state.salary} /> : null}
      </div>

    );
  }
}

export default App;
