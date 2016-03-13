export function fSimpleInterests(p, r, t) {
  r = parseFloat(r);
  t = parseFloat(t);
  return p * (1.0 + r * t);
}

export function fCompoundInterests(p, r, t) {
  // Make it into float first
  r = parseFloat(r);
  t = parseFloat(t);
  return p * Math.pow((1 + r), t);
}

export function SimpleInterestsCal(p, r, t) {
  p = parseFloat(p);
  r = parseFloat(r);
  t = parseFloat(t);

  var data = [];
  var immediateInterest = 0;
  var immediateBalance = p;
  var startBalance, startPrinciple, endBalance, endPrinciple;

  // Assign defaults
  startBalance = endBalance = startPrinciple = endPrinciple = p;
  endPrinciple = p;

  // Go through all the years
  for (var i = 1; i <= t; i++) {
    immediateInterest = p * r;
    startBalance = endBalance;
    endBalance += immediateInterest;
    data.push({
      year: i,
      startPrinciple: startPrinciple,
      startBalance: startBalance,
      interests: immediateInterest,
      endBalance: endBalance,
      endPrinciple: endPrinciple
    })
  };

  return data;
}
