'use strict';
const books = document.querySelectorAll('.book');
books[0].before(books[1]);
books[2].before(books[4]);
books[2].before(books[3]);
books[2].before(books[5]);
console.log('books: ', books);

const body = document.querySelector('body');
document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

const adv = document.querySelector('.adv');
adv.remove('.adv');

const header = document.querySelectorAll('h2');
header[2].textContent = 'Книга 3. this и Прототипы Объектов';
header[2].style.color = '#bdb76b';

const book2 = books[0];
const text2 = book2.querySelectorAll('li');

text2[2].before(text2[3]);
text2[2].before(text2[6]);
text2[2].before(text2[8]);
text2[2].before(text2[4]);
text2[9].after(text2[2]);

const book5 = books[5];
const text5 = book5.querySelectorAll('li');
console.log('text5: ', text5);
text5[2].before(text5[9]);
text5[2].before(text5[3]);
text5[2].before(text5[4]);
text5[5].before(text5[6]);
text5[8].before(text5[5]);

const book6 = books[2];
const text6 = book6.querySelectorAll('li');
console.log('text6: ', text6);
const elem = text6[8];
elem.insertAdjacentHTML('afterend', '<li>Глава 8: За пределами ES6</li>');




