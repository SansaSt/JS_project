'use strict';
let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
 }; // Проверка на число


let money,
  start = function(){
  
    do {
      money = +prompt('Ваш месячный доход?');
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
  mission: 300000,
  period: 3,
  asking: function(){ 
    let sum,
        expense,
        addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        appData.addExpenses = addExpenses.toLowerCase().split(', ');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
          for (let i = 0; i < 2; i++) {
      
            expense = prompt('Введите обязательную статью расходов');
          
            do {
            sum = +prompt('Во сколько это обойдется?');
            } 
            while (!isNumber(sum));

            appData.expenses[expense] = sum;
          }
          return sum;
    },

  getExpensesMonth: function(){
    let rez = 0;
      for(let key in appData.expenses){
        rez += appData.expenses[key];
      }
      return rez;
  },

  getBudget: function(){
    return appData.budgetMonth / appData.budgetDay;
    },

  getTargetMonth: function(){
    let getTarget = appData.mission / appData.getBudget();
    console.log('getTarget: ', getTarget);
      if (getTarget > 0) {
        console.log('Цель будет достигнута за : ', getTarget);
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

  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
};


appData.asking();
appData.getExpensesMonth();
appData.budgetMonth = appData.budget - appData.getExpensesMonth();
appData.budgetDay = (appData.budget - appData.getExpensesMonth()) / 30;
appData.getTargetMonth();
appData.getStatusIncome();

console.log('Расходы за месяц: ' + appData.expenses);













