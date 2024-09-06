const fs = require('fs');
const { EOL } = require('os');

function read() {
  const readTxt = fs.readFileSync('./puzzles.txt', 'utf-8');
// console.log(readTxt)
  const tempArr = readTxt.split('\n').map((elem)=>elem.split(','))
  // const sudokuArr = tempArr.split(',')

  console.log(tempArr)
}

read()

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
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
