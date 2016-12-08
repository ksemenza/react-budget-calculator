import React, { Component } from 'react';
import Button from './Button';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false
    };
    this.calculateBudget = this.calculateBudget.bind(this);
    this.getUserBudget = this.getUserBudget.bind(this);
  }

  getUserBudget(event) {
    this.setState({
      value: event.target.value
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
            <input type="text" placeholder="Monthly Salary" value={this.state.budget} onChange={this.getUserBudget}/>
            <Button onClick={this.calculateBudget} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
