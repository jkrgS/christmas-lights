'use strict';

const colors = [
  'yellow',
  'yellowgreen',
  'red',
  'blue',
  'cyan',
  'orange',
  'pink',
];

const randomInteger = (n) => Math.floor(Math.random() * n); // Random number in [0, n)

/*
 * User input
 * -------------------------------------------------- */

let height;

while (true) {
  height = prompt('How tall do you want the tree to be?', 10) * 1;

  if (height) {
    break;
  }
}

/*
 * Tree construction
 * -------------------------------------------------- */

const tree = document.getElementById('tree');

let count = 0;

for (let i = 0; i < height - 1; i++) {
  const row = document.createElement('div');

  for (let j = 0; j < 2 * i + 1; j++) {
    const light = document.createElement('span');
    light.id = `light-${count++}`;
    light.classList.add('light');
    light.innerText = '*';
  }

  tree.appendChild(row);
}

const stub = document.createElement('div');
stub.id = 'stub';
stub.innerText = '🟫';
tree.appendChild(stub);

/*
 * Events
 * -------------------------------------------------- */

/*

/*
 * Timers
 * -------------------------------------------------- */

setInterval(() => {
  const star = document.getElementById('star');
  star.classList.toggle('on');
}, 2 * 1000);

setInterval(() => {
  const light = document.getElementById(`light-${randomInteger(count + 1)}`);
  if (light) {
    light.style.color = colors[randomInteger(colors.length)];
  }
}, 1 * 1000);
