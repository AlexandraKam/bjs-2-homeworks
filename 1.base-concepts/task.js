"use strict";
function solveEquation(a, b, c) {
  let arr;
  let d;
  d = b**2-4*a*c;
  if (d < 0) {
  	arr = [];
  } else if (d === 0) {
  	arr = [-b/(2*a)];
  } else {
  	arr = [(-b + Math.sqrt(d))/(2*a),(-b - Math.sqrt(d))/(2*a)];
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  if (Number.isNaN(parseFloat(percent))) {
  	return 'Параметр "Процентная ставка" содержит неправильное значение "' + percent + '"';
  }
  if (Number.isNaN(parseFloat(contribution))) {
  	return 'Параметр "Начальный взнос" содержит неправильное значение "' + contribution + '"';
  }
  if (Number.isNaN(parseFloat(amount))) {
  	return 'Параметр "Общая стоимость" содержит неправильное значение "' + amount + '"';
  }
  let creditBody = amount - contribution;
  let amountMonth = monthDiff(new Date(), new Date(date));
  let percentPerMonth = percent/12/100;
  let payment = creditBody*(percentPerMonth+percentPerMonth/(((1+percentPerMonth)**amountMonth)-1));
  totalAmount = Math.round(amountMonth*payment*100)/100;
  console.log(totalAmount);

  return totalAmount;
}

function monthDiff(d1, d2) {
    let months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}