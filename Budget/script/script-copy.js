'use strict';
let startBtn = document.getElementById('start'),
    cancelBtn = document.getElementById('cancel'),
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

function disabledInputText() {
  let textInput = document.querySelectorAll('[type="text"]');

  textInput.forEach(function(item){
    item.disabled = true;
  });

  startBtn.style.display = 'none';
  cancelBtn.style.display = 'block';
}

class AppData {

    constructor() {
      this.income = {};
      this.incomeMonth = 0;
      this.addIncome = [];
      this.expenses = {};
      this.addExpenses = [];
      this.deposit = false;
      this.percentDeposit = 0;
      this.moneyDeposit = 0;
      this.budget = 0;
      this.budgetDay = 0;
      this.budgetMonth = 0;
      this.expensesMonth = 0;
    } 
    start () {
      if (salaryAmount.value === '') {
      startBtn.disabled = true;
        return;
      }
      this.budget = +salaryAmount.value;
      this.getExpenses();
      this.getIncome();
      this.getExpensesMonth(); 
      this.getAddExpenses();
      this.getAddIncome();
      this.getBudget();
      this.showResult();
      disabledInputText();
    }

    showResult () {

      incomePeriodValue.value = this.calcPeriodMoney();
      budgeMonthValue.value = this.budgetMonth;
      budgetDayValue.value = this.budgetDay;
      expensesMmonthValue.value = this.expensesMonth;
      additionalExpensesValue.value = this.addExpenses.join(', ');
      additionalIncomeValue.value = this.addIncome;
      targetMonthValue.value = Math.ceil(this.getTargetMonth());
      incomePeriodValue.value = this.calcPeriodMoney() ;
    }

    addExpensesBlock (){
      let cloneExpensesItem = expensesItems[0].cloneNode(true); 
      expensesItems[0].parentNode.insertBefore(cloneExpensesItem, plusExpenses);
      expensesItems = document.querySelectorAll('.expenses-items');
      if (expensesItems.length === 3){
        plusExpenses.style.display = 'none';
      }
    }

    addIncomeBlock () {
      let cloneIncomeItem = incomeItems[0].cloneNode(true);
      incomeItems[0].parentNode.insertBefore(cloneIncomeItem, plusIncome);
      incomeItems = document.querySelectorAll('.income-items');
      if (incomeItems.length === 3) {
        plusIncome.style.display = 'none';
      }
    }

    getExpenses (){

      expensesItems.forEach((item) => {
        let itemExpenses = item.querySelector('.expenses-title').value;
        let cashExpenses = item.querySelector('.expenses-amount').value;
        if (itemExpenses !== '' && cashExpenses !== '') {
          this.expenses[itemExpenses] = cashExpenses;
        }
      }); 
    }   
    
    getIncome () {

      incomeItems.forEach((item) => {
        let itemIncome = item.querySelector('.income-title').value;
        let cashIncome = item.querySelector('.income-amount').value;
        if (itemIncome !== '' && cashIncome !== '') {
          this.income[itemIncome] = cashIncome;
        }
    });
      for (let key in this.income){
        this.incomeMonth += +this.income[key];
        }
    }

    getAddExpenses () {

      let addExpenses = additionalExpensesItem.value.split(',');
      addExpenses.forEach(item => {
        item = item.trim();
        if (item !== ''){
          this.addExpenses.push(item);
        }
      });
    }

    getAddIncome () {

      additionalIncomeItem.forEach(item => {
        let itemValue = item.value.trim();
        if (itemValue !== ''){
          this.addIncome.push(itemValue);
        }
      });

      if(this.deposit){
        this.percentDeposit = validateNumber('Какой годовой процент', 10);
        this.moneyDeposit = validateNumber('Какая сумма вложена?', 100000);
      }
    }

    getInfoDeposit () {
  
      addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
      this.addExpenses = addExpenses.toLowerCase().split(', ');
      this.deposit = confirm('Есть ли у вас депозит в банке?');

    }

    getExpensesMonth () {

      let rez = 0;
        for(let key in this.expenses){
          rez += +this.expenses[key];
        }
       this.expensesMonth = rez;
    }

   getBudget (){

    const monthDeposit = +this.moneyDeposit + (+this.percentDeposit / 100);
    this.budgetMonth = (this.budget + this.incomeMonth) - this.expensesMonth + monthDeposit;
    this.budgetDay = Math.floor(this.budgetMonth / 30);
  }

    getTargetMonth () {

      return targetAmount.value / this.budgetMonth;

    }

    getStatusIncome () {
      if (this.budgetDay >= 1200) {
        return ('У вас высокий уровень дохода');
      } else if (this.budgetDay > 600 || this.budgetDay < 1200) {
        return ('У вас средний уровень дохода');
      } else if (this.budgetDay <= 600) {
        return ('К сожалению у вас уровень дохода ниже среднего');
      } else {
        return ('Что-то пошло не так');
      }
    }

    getInfoDeposit () {

     
    }

    calcPeriod () {

      return (+this.budgetMonth) * +periodSelect.value;
    }

    changePeriod () {
      periodAmount.textContent = periodSelect.value;
      incomePeriodValue.value = this.calcPeriod();
    }

    reset () {
      let inputText = document.querySelectorAll('[type="text"]');
      let inputAll = document.querySelectorAll('input:not(.period-select)');

      inputAll.forEach(element => {
        element.value = '';    
      });

      inputText.forEach(function(item){
        item.disabled = false;
      });

      this.income = {};
      this.incomeMonth = 0;
      this.addIncome = [];
      this.expenses = {};
      this.addExpenses = [];
      this.deposit = false;
      this.percentDeposit = 0;
      this.moneyDeposit = 0;
      this.budget = 0;
      this.budgetDay = 0;
      this.budgetMonth = 0;
      this.expensesMonth = 0;
    
      startBtn.style.display = 'block';
      cancelBtn.style.display = 'none';
      periodSelect.value = 1;
      incomeItems.forEach((element, i) => {  
        if (i !== 0) {
          element.remove();
        }
      });
      plusIncome.style.display = 'block';
    
      expensesItems.forEach((element, i) => {  
        if (i !== 0) {
          element.remove();
        }
      });
      plusExpenses.style.display = 'block';
    }

  eventListeners () {

    startBtn.addEventListener('click', this.start.bind(this));
    cancelBtn.addEventListener('click', this.reset.bind(this));

    btnPlusIncomeAdd.addEventListener('click', this.addExpIncBlock);
    btnPlusExpensesAdd.addEventListener('click', this.addExpIncBlock);

    depositCheck.addEventListener('change', this.depositHandler.bind(this));

    periodSelect.addEventListener('input', this.changlePeriodSelect.bind(this));
    salaryAmount.addEventListener('input', () => {
      if (salaryAmount.value !== '') {
        startBtn.disabled = false;    
      } else {
        startBtn.disabled = true;    
      }
    });
  }
}

/* let str = appData.addExpenses;
str.forEach((el, i) => {
  let res;
  el = el.trim();
  res = el.replace(el[0], el[0].toUpperCase()); 
  str[i] = res;
});
console.log(str.join(', ')); */


















