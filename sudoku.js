const cfonts = require('cfonts');

cfonts.say('Hello|world!', {
	font: 'block',              // define the font face
	align: 'left',              // define text alignment
	colors: ['system'],         // define all colors
	background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
	letterSpacing: 1,           // define letter spacing
	lineHeight: 1,              // define the line height
	space: true,                // define if the output text should have empty lines on top and on the bottom
	maxLength: '0',             // define how many character can be on one line
	gradient: false,            // define your two gradient colors
	independentGradient: false, // define if you want to recalculate the gradient for each new line
	transitionGradient: false,  // define if this is a transition between colors directly
	rawMode: false,             // define if the line breaks should be CRLF (`\r\n`) over the default LF (`\n`)
	env: 'node'                 // define the environment cfonts is being executed in
});

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
const arr = [
  [1, 2, '-', 4, 5, 6, 7, 8, 9]
  [9, 1, 2, 3, '-', 5, 6, 7, 8]
  [1, 2, '-', 4, 5, 6, 7, 8, 9]
  [1, 2, 3, 4, 5, 6, 7, 8, 9]
  [1, 2, 3, 4, 5, 6, 7, 8, 9]
  [1, 2, 3, 4, '-', 6, 7, 8, 9]
  [1, 2, 3, 4, 5, 6, 7, 8, 9]
  [1, 2, '-', 4, 5, 6, 7, 8, 9]
  [1, 2, 3, 4, 5, 6, 7, 8, 9]
]
function solve(arr) {
// const arrOfRead = read();

}
solve(arr)

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
