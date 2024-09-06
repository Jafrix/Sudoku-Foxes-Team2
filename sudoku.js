const cfonts = require('cfonts');
const fs = require('fs');
const { EOL } = require('os');

function read() {
  const readTxt = fs.readFileSync('./puzzles.txt', 'utf-8');

  const tempArr = readTxt.split('\n');

  const newArr = tempArr
    .map((elem) => elem.split(''))
    .map((puzzle) => {
      const result = [];
      for (let i = 0; i < 81; i += 9) {
        const nestedArr = puzzle.slice(i, i + 9);
        result.push(nestedArr);
      }
      return result;
    });

  return newArr[process.argv[2]];
}

function isSafe(newRead, row, col, num) {
  for (let x = 0; x <= 8; x++) if (newRead[row][x] === num) return false;

  for (let x = 0; x <= 8; x++) if (newRead[x][col] === num) return false;

  const startRow = row - row % 3;
  const startCol = col - col % 3;

  for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) if (newRead[i + startRow][j + startCol] === num) return false;

  return true;
}

// function isSolved() {
//   arrOfSolve = arrOfSolv();
//   let counter = 0;
//   arrOfSolve.forEach((element) => {
//     if (element.includes('-')) {
//       counter = 1;
//     }
//   });

//   if (counter === 1) {
//     return false;
//   }

//   return true;
// }


const n = 9;

function solve(newRead, row, col) {
  if (row === n - 1 && col === n) return true;

  if (col === n) {
    row++;
    col = 0;
  }

  if (newRead[row][col] !== '-') {
    return solve(newRead, row, col + 1);
  }

  for (let num = 1; num < 10; num++) {
    if (isSafe(newRead, row, col, num)) {
      newRead[row][col] = num;

      if (solve(newRead, row, col + 1)) return true;
    }

    newRead[row][col] = '-';
  }
  return false;
}


function print(grid)
{
    for(let i = 0; i < n; i++)
    {
        for(let j = 0; j < n; j++)
            document.write(grid[i][j] + " ");
            
        document.write("<br>");
    }
}

function prettyBoard() {
  
  const newRead = read();
  const arrOfSolve = solve(newRead, 0, 0);
  
  

  
 
  const newSudoku = newRead.map((cell) => {
    const newArr = cell.map((el) => ((el !== '-') ? el : ' '));
    const firstArr = newArr.slice(0, 3);
    const secondArr = newArr.slice(3, 6);
    const thirdArr = newArr.slice(6);
    const finalArr = [...firstArr, '|', ...secondArr, '|', ...thirdArr];
    return finalArr.join(' ');
  }).join(EOL);

  console.log(newSudoku);
}

prettyBoard();
