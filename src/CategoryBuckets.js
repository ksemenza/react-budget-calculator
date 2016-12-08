import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

//Components
import CategoryBucket from './CategoryBucket';

// CSS files
import './CategoryBuckets.css';


class CategoryBuckets extends Component {

  render() {
    const budget = this.props.budget;
    const data = {
      labels: [
        'Essentials',
        'Wants',
        'Savings'
      ],
      datasets: [{
        data: [
            budget.essentials,
            budget.wants,
            budget.savings
          ],
        backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
        ],
        hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
        ],
        animation:{
          animateScale:true
        }
      }]
    };
    return (
      <div className="category__buckets">
        <Doughnut className="doughnut" 
                  data={data} 
                  width={350}
                  height={350}
                  options={{
                      maintainAspectRatio: true,
                      responsive: false
                  }}
        />
        <CategoryBucket essentials={this.props.budget.essentials} name="Essentials"/> 
        <CategoryBucket wants={this.props.budget.wants} name="Wants" /> 
        <CategoryBucket savings={this.props.budget.savings} name="Savings" />


      </div>
    );
  }
}

export default CategoryBuckets;
