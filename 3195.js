'use strict'

function randomNumber() {
  const num = Math.random() * 1000;
  const t = Math.random() * 1000;
  setTimeout(() => { console.log(num)}, t);
}
randomNumber();