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
        <div className="doughnut">
          <Doughnut data={data} 
                    width={350}
                    height={350}
                    options={{
                        maintainAspectRatio: true,
                        responsive: false
                    }}
          />
        </div>
        <div class="category__bucket"> 
          <CategoryBucket essentials={this.props.budget.essentials} name="Essentials"/> 
        </div>
        <div class="category__bucket">
          <CategoryBucket wants={this.props.budget.wants} name="Wants" /> 

        </div>
        <CategoryBucket savings={this.props.budget.savings} name="Savings" />


      </div>
    );
  }
}

export default CategoryBuckets;
