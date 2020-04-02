const nameOfFunction = new Function ('alert("Hi")');
nameOfFunction(); // Конструктор функций

function outputMessage(name, age) { // Параметры
  console.log('Hello ' + name);
}
outputMessage('Max', 30); //Аргументы

// let res = 0; // Вывод результата из функции
const sum = function(a, b) {
  res = a + b;
}

sum (3, 5);
console.log(res);

const sum = function(a, b) { //Чистая функци
  // return = a + b;
  if (!a){
    a = 0;
  }
  if (!b) {
    b = 0;
  }
  return a + b; // Функция возвращает результат и останавливается
};

let res = sum (3, 5);
console.log(res);

let showTypeOf = function (data) {
  console.log(data, typeOf(data)); //Данные
}

showTypeOf(money);

let getStatusIncome = function(){ //Чистая функция не должна ничего выводить в консоль
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

const sum = function (a, b) { //Анонимная функция
  return a + b;
};

(function() {
  console.log('Hello');
}()); // Анонимная функция может вызывать сама себя


const doNum = function (a, b, callback) { // В качестве параметров функции могут передаваться функции
  if (typeof a === 'number' && type of b === 'number'){
    callback(a, b);
  }
};

doNum(5, 10, function(a, b){
  console.log(a + b);
});

function one(callback){
  console.log('Делаем запрос на сервер');
  setTimeout(function(){
    console.log('Получаем данные от сервера');
    callback();
  }, 1000);
}

function two(){
  console.log('Выводим на страницу');
}

one(two); //вызов callback function

// Циклы

let n = 0;
while(n < 5){
  console.log(n);
  n++;
};

do{
  console.log(n);
  n++
}
while (n < 5);

for(let i = 0; i < 5; i++) {

  if(i === 3){
    break;
  }

  if(i === 3){
    continue; // пропуск значения 3
  }


  console.log(i);
}

let start = function(){
  money = +prompt('Ваш месячный доход?');

  while (isNaN(money) || money.trim() === '' || money === null) {
    money = +prompt('Ваш месячный доход?');
  }
};
