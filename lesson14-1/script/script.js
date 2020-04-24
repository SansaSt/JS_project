'use strict';

const body = document.querySelector('body');

function DomElement(selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
}

DomElement.prototype.render = function() { 

  let newElement;
  if (this.selector[0] === '.') {
    newElement = document.createElement('div');
    newElement.classList.add('block');
  } else if (this.selector[0] === '#') {
    newElement = document.createElement('p');
    newElement.classList.add('best');
  } 

  newElement.style.cssText = `height:`  + this.height + `; \
                            width:` + this.width + `; \
                            background:` + this.bg + `; \
                            font-Size:` + this.fontSize;

  newElement.textContent = 'Hello, world';

  body.append(newElement);
  console.log('newElement: ', newElement);

};

let newItem1 = new DomElement('.div', '20px', '10px', '#ffffff', '14px');
newItem1.render();

let newElem2 = new DomElement('#id', '20px', '10px', 'red', '14px');
newElem2.render();



