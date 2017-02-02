// //Calculating futureValue with compounding interest

/*
    This returns the future value after compounding interest
    @params startBalance - starting balance
    @params yearsToGrow - number of years to compound
    @params monthlyContribution - monthly contribution in dollars
    @params rate - interest rate
    @returns compounding interest
 */

export const compoundInterest = (rate, startBalance, yearsToGrow, monthlyContribution) => {
    for(var i = 0; i < yearsToGrow; i++) {
      startBalance = startBalance * (1 + rate) + monthlyContribution;
    }
    return Math.round(startBalance * 100) / 100;
}
