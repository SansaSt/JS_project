let money,
    income,
    addExpenses,
    deposit,
    mission,
    period,
    budgetDay;

money = 50000;
income = 'Вклад';
addExpenses = 'Еда, бензин, квартплата';
deposit = true;
mission = 300000;
period = 10;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');
console.log(addExpenses.toLowerCase().split(', '));

budgetDay = money / 30;
console.log(budgetDay);






