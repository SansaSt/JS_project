'use strict';
let startBtn = document.getElementById('start'),
    plusIncome = document.getElementsByTagName('button')[0],
    plusExpenses = document.getElementsByTagName('button')[1],
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    checkDeposit = document.querySelector('#deposit-check'),
    budgetDayValue = document.querySelector('.budget_day-value'),
    budgetMonthValue = document.querySelector('.budget_month-value'),
    expensesMonthValue = document.querySelector('.expenses_month-value'),
    additionalIncomeValue = document.querySelector('.additional_income-value'),
    additionalExpensesValue = document.querySelector('.additional_expenses-value'),
    incomePeriodValue = document.querySelector('.income_period-value'),
    targetMonthValue = document.querySelector('.target_month-value'),
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    expensesTitle = document.querySelector('.expenses-title'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    periodSelect = document.querySelector('.period-select'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    targetAmount = document.querySelector('.target-amount'),
    incomeItems = document.querySelectorAll('.income-items'),
    range = document.querySelector('.range'),
    periodAmount = document.querySelector('.period-amount');

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

let appData = {
    income: {},
    incomeMonth: 0,
    addIncome: [],
    expenses: { 
    },
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    start: function(){

      if(salaryAmount.value === ''){
        startBtn.disabled = true;
        return;
      }
      appData.budget = +salaryAmount.value;

      appData.getExpenses();
      appData.getExpensesMonth(); 
      appData.getAddExpenses();
      appData.getAddIncome();
      appData.getIncome();
      appData.getBudget();
      appData.showResult();
    },
    showResult: function(){
      budgetMonthValue.value = appData.budgetMonth; 
      budgetDayValue.value = appData.budgetDay;
      expensesMonthValue.value = appData.expensesMonth;
      additionalExpensesValue.value = appData.addExpenses.join(', ');
      additionalIncomeValue.value = appData.addIncome.join(', ');  
      targetMonthValue.value = Math.ceil(appData.getTargetMonth());
      incomePeriodValue.value = appData.calcPeriod();
    },
    addExpensesBlock: function(){
      let cloneExpensesItem = expensesItems[0].cloneNode(true); 
      expensesItems[0].parentNode.insertBefore(cloneExpensesItem, plusExpenses);
      expensesItems = document.querySelectorAll('.expenses-items');
      if (expensesItems.length === 3){
        plusExpenses.style.display = 'none';
      }
    },
    getExpenses: function(){
      expensesItems.forEach(function(item){
        let itemExpenses = item.querySelector('.expenses-title').value;
        let cashExpenses = item.querySelector('.expenses-amount').value;
        if(itemExpenses !== '' && cashExpenses !== ''){
          appData.expenses[itemExpenses] = cashExpenses;
        }
      });
    },
    getIncome: function(){
      incomeItems.forEach(function(item){
        let itemIncome = item.querySelector('.income-title').value;
        let cashIncome = item.querySelector('.income-amount').value;
        if (itemIncome !== '' && cashIncome !== '') {
          appData.income[itemIncome] = cashIncome;
      }
    });
    for (let key in appData.income){
      appData.incomeMonth += +appData.income[key];
      }
    },
    addIncomeBlock: function() {
      let cloneIncomeItem = incomeItems[0].cloneNode(true);
      cloneIncomeItem.querySelector('.income-title').value = '';
      cloneIncomeItem.querySelector('.income-amount').value = '';
      incomeItems[0].parentNode.insertBefore(cloneIncomeItem, btnPlusIncomeAdd);
      incomeItems = document.querySelectorAll('.income-items');
      if (incomeItems.length === 3) {
        btnPlusIncomeAdd.style.display = 'none';
      }
    },
    getAddExpenses: function(){
      let addExpenses = additionalExpensesItem.value.split(',');
      addExpenses.forEach(function(item){
        item = item.trim();
        if (item !== ''){
          appData.addExpenses.push(item);
        }
      })
    },
    getAddIncome: function(){
      additionalIncomeItem.forEach(function(item){
        let itemValue = item.value.trim();
        if (itemValue !== ''){
          appData.addIncome.push(itemValue);
        }
      });
    },
    getInfoDeposit: function(){
      let sum,
          expense,
          addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
          appData.addExpenses = addExpenses.toLowerCase().split(', ');
          appData.deposit = confirm('Есть ли у вас депозит в банке?');
      },
    getExpensesMonth: function(){
      let rez = 0;
        for(let key in appData.expenses){
          rez += +appData.expenses[key];
        }
        appData.expensesMonth = rez;
    },
    getBudget: function(){
      appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
      appData.budgetDay = Math.floor(appData.budgetMonth / 30);
      },
    getTargetMonth: function(){
      return targetAmount.value / appData.budgetMonth;
        /* if (getTarget > 0) {
          console.log('Цель будет достигнута за : ', getTarget + ' месяцев');
        } else {
          console.log('Цель не будет достигнута'); 
        } */ 
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
    calcPeriod: function(){
      return appData.budgetMonth * +periodSelect.value;
    },
    changePeriod: function(){
      periodAmount.textContent = periodSelect.value;
      incomePeriodValue.value = appData.calcPeriod();
    },
  };

start.addEventListener('click', appData.start);

plusExpenses.addEventListener('click', appData.addExpensesBlock);
periodSelect.addEventListener('input', appData.changePeriod);
salaryAmount.addEventListener('input', function() {
  if (salaryAmount.value !== '') {
    startBtn.disabled = false;    
   } else {
    startBtn.disabled = true;    
   }
  }),
appData.budgetMonth = appData.budget - appData.getExpensesMonth();
appData.budgetDay = Math.floor(appData.budgetMonth / 30);
appData.getTargetMonth();
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


















