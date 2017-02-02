// //Calculating futureValue with compounding interest

// export function compoundInterest( rate, principal, numOfPeriods) {
//     var CI = principal * Math.pow((1.00 + rate), numOfPeriods);
//     return Math.round(CI * 100) / 100;
// }

/*
    This returns the future value after compounding interest
    @params startBalance - starting balance
    @params yearsToGrow - number of years to compound
    @params monthlyContribution - monthly contribution in dollars
    @params rate - interest rate
    @returns compounding interest
 */

export const compoundInterest = (rate, startBalance, yearsToGrow, monthlyContribution) => {
    let monthlyRate = rate / 12;
    let monthsToGrow = yearsToGrow * 12;
    for(var i = 0; i < monthsToGrow; i++) {
      startBalance = startBalance * (1 + monthlyRate) + monthlyContribution;
    }
    return Math.round(startBalance * 100) / 100;
}
