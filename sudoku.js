const fs = require("fs");
const { EOL } = require("os");

function read() {

  const readTxt = fs.readFileSync("./puzzles.txt", "utf-8");

  const tempArr = readTxt.split("\n");
  
  const newArr = tempArr
    .map((elem) => elem.split(""))
    .map((puzzle) => {
      const result = [];
      for (let i = 0; i < 81; i += 9) {
        const nestedArr = puzzle.slice(i, i + 9);
        result.push(nestedArr);
      }
      return result;
    });

  console.log(newArr[process.argv[2]]);
}

read();



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
