'use strict';
let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
 }; // Проверка на число

let money,
    income,
    addExpenses,
    deposit,
    mission,
    period,
    budgetDay;

money,
income = 'Вклад';
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
deposit = confirm('Есть ли у вас депозит в банке?');
mission = 300000;
period = 10;

let start = function(){
  
  do {
    money = +prompt('Ваш месячный доход?');
  }
  while (!isNumber(money));
};

start();

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.toLowerCase().split(', '));

// lesson05

let expenses = [];

const getExpensesMounth = function(){
  let sum = 0; 

  for (let i = 0; i < 2; i++){

    expenses[i] = prompt('Введите обязательную статью расходов');
   
    do {
    sum = +prompt('Во сколько это обойдется?');
    } 
    while (!isNumber(sum));
  }
  return sum;s
};

let expensesAmount = getExpensesMounth();

console.log('getExpensesMounth: ' + expensesAmount);

const getAccumulatedMonth = function() {
  return money - expensesAmount;
};

let accumulatedMonth = getAccumulatedMonth();

console.log('accumulatedMonth: ', accumulatedMonth);

let getTarget;
const getTargetMonth = function () {
  getTarget = mission / accumulatedMonth;
  if (getTarget > 0) {
    console.log('Цель будет достигнута за : ', getTargetMonth());
  } else {
    console.log('Цель не будет достигнута');
  }
};


budgetDay = accumulatedMonth / 30;
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












