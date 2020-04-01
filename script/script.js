'use strict';

let money,
    income,
    addExpenses,
    deposit,
    mission,
    period,
    budgetDay;

money = +prompt('Ваш месячный доход?');
income = 'Вклад';
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
deposit = confirm('Есть ли у вас депозит в банке?');
mission = 300000;
period = 10;
let expenses1 = prompt('Введите обязательную статью расходов');
let amount1 = +prompt('Во сколько это обойдется?');
let expenses2 = prompt('Введите обязательную статью расходов');
let amount2 = +prompt('Во сколько это обойдется?');

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.toLowerCase().split(', '));

// lesson04

let sum; 
const getExpensesMounth = function(x, y){
  sum = x + y;
};

getExpensesMounth(amount1, amount2);
console.log('getExpensesMounth: ' + sum);

let accumulated;
const getAccumulatedMonth = function(x, y) {
  accumulated = x - y;
};

getAccumulatedMonth(money, sum);
console.log('getAccumulatedMonth: ', + accumulated);

let accumulatedMonth = accumulated;
console.log('accumulatedMonth: ', accumulatedMonth);

let getTarget;
const getTargetMonth = function (x, y, z) {
  getTarget = x / (y - z);
};
getTargetMonth(mission, money, sum);
console.log('getTargetMonth: ', getTarget);

budgetDay = (money - accumulatedMonth) / 30;
console.log('budgetDay: ', budgetDay);

const getStatusIncome = function(){ //Чистая функция не должна ничего выводить в консоль
  if (budgetDay >= 1200) {
    return ('У вас высокий уровень дохода');
  } else if (budgetDay > 600 || budgetDay < 1200) {
    return ('У вас средний уровень дохода');
  } else if (budgetDay <= 600) {
    return ('К сожалению у вас уровень дохода ниже среднего');
  } else {
    return ('Что-то пошло не так');
  }
};

console.log('getStatusIncome(): ', getStatusIncome());












