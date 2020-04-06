'use strict';
let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
 }; // Проверка на число

 let isString = function(n) {
  let num =  Number(n);
  if (typeof n === 'string' && isNaN(num)) {
    return true;
  } 
  return false;
};

const validateNumber = function (question, answer) {
  let res;
  do {
    res = prompt(question, answer); 
  }
  while(!isNumber(res));  
  return res; 
};

const validateString = function (question, answer) {
  let res;
  do {
    res = prompt(question, answer); 
  }
  while(!isString(res)); 
  return res; 
};

let money,
  start = function(){
  
    do {
      money = +prompt('Ваш месячный доход?', 50000);
    }
    while (!isNumber(money));
};

start();

// lesson7

let appData = {
  income: {},
  addIncome: [],
  expenses: { 
  },
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  mission: 300000,
  period: 3,
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  asking: function(){ 
 
    if(confirm('Есть ли у вас дополнительный источник заработка?')) {

      let itemIncome = validateString('Какой у вас дополнительный заработок?', 'Такси');
      let cashIncome = validateNumber('Сколько в месяц вы на этом зарабатываете?', 10000);

      appData.income[itemIncome] = cashIncome;
    }

    let sum,
        expense,
        addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        appData.addExpenses = addExpenses.toLowerCase().split(', ');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');

          for (let i = 0; i < 2; i++) {
            let message = validateString(`Введите обязательную статью расходов?`);
            let sum = validateNumber('Во сколько это обойдется?'); 
            appData.expenses[message] = sum;
          } 
    },

  getExpensesMonth: function(){
    let rez = 0;
      for(let key in appData.expenses){
        rez += +appData.expenses[key];
      }
      return rez;
  },

  getBudget: function(){
    return appData.budgetMonth / appData.budgetDay;
    },

  getTargetMonth: function(){
    let getTarget = appData.mission / appData.budgetMonth;
      if (getTarget > 0) {
        console.log('Цель будет достигнута за : ', getTarget + ' месяцев');
      } else {
        console.log('Цель не будет достигнута');
      }
    return getTarget;
  },

  getStatusIncome: function(){
    if (appData.budgetDay >= 1200) {
      return ('У вас высокий уровень дохода');
    } else if (appData.budgetDay > 600 || appData.budgetDay < 1200) {
      return ('У вас средний уровень дохода');
    } else if (appData.budgetDay <= 600) {
      return ('К сожалению у вас уровень дохода ниже среднего');
    } else {
      return ('Что-то пошло не так');
    }
  },
  getInfoDeposit: function(){
    if(appData.deposit){
      appData.percentDeposit = validateNumber('Какой годовой процент', 10);
      appData.moneyDeposit = validateNumber('Какая сумма вложена?', 100000);
    }
  },
  calcSavedMoney: function(){
    return appData.budgetMonth * appData.period;
  }
};


appData.asking();
appData.getExpensesMonth();
appData.budgetMonth = appData.budget - appData.getExpensesMonth();
appData.budgetDay = Math.floor(appData.budgetMonth / 30);
appData.getTargetMonth();
console.log(appData.getStatusIncome());
console.log('Расходы за месяц: ' + appData.getExpensesMonth());
console.log(appData.expenses);
appData.getInfoDeposit();

for (let key in appData) {
  console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
};

let str = appData.addExpenses;
str.forEach((el, i) => {
  let res;
  el = el.trim();
  res = el.replace(el[0], el[0].toUpperCase()); 
  str[i] = res;
});
console.log(str.join(', '));

















