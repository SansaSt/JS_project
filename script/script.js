'use strict';

let money,
    income,
    addExpenses,
    deposit,
    mission,
    period,
    budgetDay,
    budgetMonth,
    expenses1,
    expenses2,
    amount1,
    amount2;

money = +prompt('Ваш месячный доход?');
income = 'Вклад';
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
deposit = confirm('Есть ли у вас депозит в банке?');
mission = 300000;
period = 10;
expenses1 = prompt('Введите обязательную статью расходов');
amount1 = +prompt('Во сколько это обойдется?');
expenses2 = prompt('Введите обязательную статью расходов');
amount2 = +prompt('Во сколько это обойдется?');
budgetMonth = amount1 + amount2;
budgetDay = budgetMonth / 30;


console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');
console.log(addExpenses.toLowerCase().split(', '));
console.log('budgetDay: ', Math.round(budgetDay));
console.log('budgetMonth: ', budgetMonth);
console.log('Цель будет достигнута за: ' + mission / (money - budgetMonth) + ' месяцев');

if (budgetDay >= 1200) {
  console.log('У вас высокий уровень дохода');
} else if (budgetDay > 600 || budgetDay < 1200) {
  console.log('У вас средний уровень дохода');
} else if (budgetDay <= 600) {
  console.log('К сожалению у вас уровень дохода ниже среднего');
} else {
  console.log('Что-то пошло не так');
};







