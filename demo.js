// var h1 = document.querySelector('h1');
// h1.style.color = 'yellow';
// h1.style.border = '5px solid pink';
// console.log(h1.style);

// var p = document.querySelector('p');
// console.log(p);

// p.classList.add('big');
// p.classList.remove('big');
// p.classList.toggle('big');
// p.classList.toggle('big');
// console.log(p.classList);

var img1 = document.getElementsByTagName('img')[0];
console.log(img1);

img1.getAttribute('src');

img1.setAttribute(
  'src',
  'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
);

var img2 = document.getElementsByTagName('img')[1];

img2.setAttribute(
  'src',
  'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
);

var a = document.querySelector('a');
console.log(a);

a.setAttribute('href', 'http://www.bing.com');
a.textContent = 'LINK TO BING';
