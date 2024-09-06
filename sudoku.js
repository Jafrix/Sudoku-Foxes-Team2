const cfonts = require('cfonts');
const fs = require('fs');
const { EOL } = require('os');

function read() {
  /**
   * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
   */
}


function solve() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
}

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

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
