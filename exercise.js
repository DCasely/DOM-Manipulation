// ATLEAST 4 WAYS TO SELECT FIRST P TAG

var p1 = document.getElementsByTagName('p')[0];
console.log(p1);

var p2 = document.getElementById('first');
console.log(p2);

var p3 = document.getElementsByTagName('p')[0];
console.log(p3);

var p4 = document.querySelector('p');
console.log(p4);

var p5 = document.querySelector('.special');
console.log(p5);

var p6 = document.querySelector('#first');
console.log(p6);

var p7 = document.getElementsByClassName('special')[0];
console.log(p7);

var p8 = document.querySelectorAll('.special')[0];
console.log(p8);

var p9 = document.querySelectorAll('p')[0];
console.log(p9);

var p10 = document.querySelector('h1 + p');
console.log(p10);
