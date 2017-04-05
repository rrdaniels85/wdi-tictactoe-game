'use strict'

// compare current squaresInPlay array against possible wins or draw
const checkWinningCombos = function (gamearray) {
  // check for winning combo 1
  if ((gamearray[0] === gamearray[1]) && (gamearray[1] === gamearray[2]) && (gamearray[2] !== '')) {
    let winningPlayer = gamearray[0]
    console.log('Player ' + winningPlayer + ' wins!')
    return true
    // check for winning combo 2
  } else if ((gamearray[3] === gamearray[4]) && (gamearray[4] === gamearray[5]) && (gamearray[5] !== '')) {
    let winningPlayer = gamearray[3]
    console.log('Player ' + winningPlayer + ' wins!')
    return true
    // check for winning combo 3
  } else if ((gamearray[6] === gamearray[7]) && (gamearray[7] === gamearray[8]) && (gamearray[8] !== '')) {
    let winningPlayer = gamearray[6]
    console.log('Player ' + winningPlayer + ' wins!')
    return true
    // check for winning combo 4
  } else if ((gamearray[0] === gamearray[3]) && (gamearray[3] === gamearray[6]) && (gamearray[6] !== '')) {
    let winningPlayer = gamearray[0]
    console.log('Player ' + winningPlayer + ' wins!')
    return true
    // check for winning combo 5
  } else if ((gamearray[1] === gamearray[4]) && (gamearray[4] === gamearray[7]) && (gamearray[7] !== '')) {
    let winningPlayer = gamearray[1]
    console.log('Player ' + winningPlayer + ' wins!')
    return true
    // check for winning combo 6
  } else if ((gamearray[2] === gamearray[5]) && (gamearray[5] === gamearray[8]) && (gamearray[8] !== '')) {
    let winningPlayer = gamearray[2]
    console.log('Player ' + winningPlayer + ' wins!')
    return true
    // check for winning combo 7
  } else if ((gamearray[0] === gamearray[4]) && (gamearray[4] === gamearray[8]) && (gamearray[8] !== '')) {
    let winningPlayer = gamearray[0]
    console.log('Player ' + winningPlayer + ' wins!')
    return true
  } else if ((gamearray[2] === gamearray[4]) && (gamearray[4] === gamearray[6]) && (gamearray[6] !== '')) {
  let winningPlayer = gamearray[2]
    console.log('Player ' + winningPlayer + ' wins!')
    return true
    // if all squares filled in with no win combo - notify it's a draw
  } else if (gamearray.indexOf('') === -1) {
    console.log('It is a draw! Game Over, no winners. Boo!')
    return true
  // if none of the above - continue playing
  } else {
    return false
  }
}

const makeMove = function (playerId, squareId, newArray, gamestatus) {
  console.log(newArray)
  // when player clicks a square have the value of currentTurn pushed into the corresponding index of the squaresInPlay array; convert the squareId into a number from a string with +
  newArray[squareId] = playerId
  // check to see if there is a winning combination
  if (checkWinningCombos(newArray)) {

  }
  // end game if match if not
}

module.exports = {
  makeMove,
  checkWinningCombos
}
