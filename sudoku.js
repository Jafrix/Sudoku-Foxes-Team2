const cfonts = require('cfonts');
const fs = require('fs');
const { EOL } = require('os');

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



function solve() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
}

function isSolved() {
  // const arrOfSolve = solve();
let counter = 0;
arr.forEach((element) =>{
 if (element.includes('-')){
  counter =1} })
 
 if(counter === 1){
  return false;
 }
 else {
  return true}
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
