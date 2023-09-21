// console.log("connected")

let gameBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];
let currentPlayer = "X";
let noOfPlays =0;
let isGameOver = false;

function playerMove(cell) {
    if(isGameOver){
        document.getElementById('playerTurn').innerHTML ="Game over! Restart Game";
        return true
    }
  let row = cell.parentNode.rowIndex;
  let col = cell.cellIndex;
  console.log(row, col);
  if (gameBoard[row][col] === "") {
    gameBoard[row][col] = currentPlayer;
    cell.innerHTML = currentPlayer;
    noOfPlays++;
    if (checkWinner()) {
      //winner check
      document.getElementById(
        "result"
      ).innerHTML = `Player ${currentPlayer} WON!`;
      isGameOver =true;
    } else if (checkTie()) {
      ///tie check
      document.getElementById("result").innerHTML = `Its a tie!`;
    }

    if (currentPlayer === "X") {
      currentPlayer = "O";
    } else {
      ///game continues
      currentPlayer = "X";
    }
    document.getElementById(
      "playerTurn"
    ).innerHTML = `Turn of ${currentPlayer}`;
  }
}
function checkWinner() {
  //rows
  for (let i = 0; i < 3; i++) {
    if (
      gameBoard[i][0] == currentPlayer &&
      gameBoard[i][1] == currentPlayer &&
      gameBoard[i][2] == currentPlayer
    ) {
        
      return true;
    }
  }
  //columns
  for (let i = 0; i < 3; i++) {
    if (
      gameBoard[0][i] === currentPlayer &&
      gameBoard[1][i] === currentPlayer &&
      gameBoard[2][i] === currentPlayer
    ) {
      return true;
    }
  }

  //diagonals 1
  if (
    gameBoard[0][0] === currentPlayer &&
    gameBoard[1][1] === currentPlayer &&
    gameBoard[2][2] === currentPlayer
  ) {
    return true;
  }
  //D2
  if (
    gameBoard[0][2] === currentPlayer &&
    gameBoard[1][1] === currentPlayer &&
    gameBoard[2][0] === currentPlayer
  ) {
    return true;
  }
}
function checkTie(){
if(noOfPlays ==9){
    return true;
}
return false;
}
function restartGame(){
 gameBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];
   currentPlayer = "X";
   noOfPlays =0;
   isGameOver= false;
   let cells = document.getElementsByClassName('cell');
   for(let i=0;i<cells.length;i++){
    cells[i].innerHTML ="";
   }
  
}