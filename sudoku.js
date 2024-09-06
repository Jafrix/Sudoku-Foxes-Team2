const cfonts = require('cfonts');
const fs = require('fs');
const { EOL } = require('os');

function read() {

}

const arr = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [9, 1, 2, 3, 5, 5, 6, 7, 8],
  [1, 2, 6, 4, 5, 6, 7, 8, 9],
  ['_', '_', '_', '_', '_', '_', '_', '_', '_'],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 7, 6, 7, 8, 9],
  ['_', '_', '_', '_', '_', '_', '_', '_', '_'],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 8, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
];
function solve(arr) {

}


function isSolved(arr) {
  
    
}
console.log(isSolved(arr));
function prettyBoard() {
 // const arrOfSolve = solve();

 const newSudoku = arr.map((cell) => {
  const newArr = cell.map((el) => ((el !== '-') ? el : ' '));
  const firstArr = newArr.slice(0, 3);
  const secondArr = newArr.slice(3, 6);
  const thirdArr = newArr.slice(6);
 const finalArr = [...firstArr, '|', ...secondArr, '|', ...thirdArr]
 return finalArr.join(' ');
}).join(EOL);

console.log(newSudoku);
}
console.log(prettyBoard(arr));