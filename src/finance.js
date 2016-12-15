//Calculating futureValue with compounding interest

export function compoundInterest( rate, principal, numOfPeriods) {
    var CI = principal * Math.pow((1.00 + rate), numOfPeriods);
    return Math.round(CI * 100) / 100;
}

//FV = PV (1 +i/n) nt
