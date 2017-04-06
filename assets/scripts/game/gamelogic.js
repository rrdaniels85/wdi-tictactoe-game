'use strict'

// compare current squaresInPlay array against possible wins or draw
const checkWinningCombos = function (gamearray) {
  // check for winning combo 1
  if ((gamearray[0] === gamearray[1]) && (gamearray[1] === gamearray[2]) && (gamearray[2] !== '')) {
    let winningPlayer = gamearray[0]
    $('.results').text('Player ' + winningPlayer + ' wins!')
    return true
    // check for winning combo 2
  } else if ((gamearray[3] === gamearray[4]) && (gamearray[4] === gamearray[5]) && (gamearray[5] !== '')) {
    let winningPlayer = gamearray[3]
    $('.results').text('Player ' + winningPlayer + ' wins!')
    return true
    // check for winning combo 3
  } else if ((gamearray[6] === gamearray[7]) && (gamearray[7] === gamearray[8]) && (gamearray[8] !== '')) {
    let winningPlayer = gamearray[6]
    $('.results').text('Player ' + winningPlayer + ' wins!')
    return true
    // check for winning combo 4
  } else if ((gamearray[0] === gamearray[3]) && (gamearray[3] === gamearray[6]) && (gamearray[6] !== '')) {
    let winningPlayer = gamearray[0]
    $('.results').text('Player ' + winningPlayer + ' wins!')
    return true
    // check for winning combo 5
  } else if ((gamearray[1] === gamearray[4]) && (gamearray[4] === gamearray[7]) && (gamearray[7] !== '')) {
    let winningPlayer = gamearray[1]
    $('.results').text('Player ' + winningPlayer + ' wins!')
    return true
    // check for winning combo 6
  } else if ((gamearray[2] === gamearray[5]) && (gamearray[5] === gamearray[8]) && (gamearray[8] !== '')) {
    let winningPlayer = gamearray[2]
    $('.results').text('Player ' + winningPlayer + ' wins!')
    return true
    // check for winning combo 7
  } else if ((gamearray[0] === gamearray[4]) && (gamearray[4] === gamearray[8]) && (gamearray[8] !== '')) {
    let winningPlayer = gamearray[0]
    $('.results').text('Player ' + winningPlayer + ' wins!')
    return true
    // check for wining combo 8
  } else if ((gamearray[2] === gamearray[4]) && (gamearray[4] === gamearray[6]) && (gamearray[6] !== '')) {
    let winningPlayer = gamearray[2]
    $('.results').text('Player ' + winningPlayer + ' wins!')
    return true
    // if all squares filled in with no win combo - notify it's a draw
  } else if (gamearray.indexOf('') === -1) {
    $('.results').text('It is a draw, bummer!')
    return true
  // if none of the above - continue playing
  } else {
    return false
  }
}

const makeMove = function (playerId, squareId, newArray, gamestatus) {
  // when player clicks a square have the value of currentTurn pushed into the corresponding index of the squaresInPlay array; convert the squareId into a number from a string with +
  newArray[squareId] = playerId
}

const totalWins = function (gamearray) {
  // check for winning combo 1 for x
  if ((gamearray[0] === gamearray[1]) && (gamearray[1] === gamearray[2]) && (gamearray[2] === 'x')) {
    return true
    // check for winning combo 2 for x
  } else if ((gamearray[3] === gamearray[4]) && (gamearray[4] === gamearray[5]) && (gamearray[5] === 'x')) {
    return true
    // check for winning combo 3 for x
  } else if ((gamearray[6] === gamearray[7]) && (gamearray[7] === gamearray[8]) && (gamearray[8] === 'x')) {
    return true
    // check for winning combo 4
  } else if ((gamearray[0] === gamearray[3]) && (gamearray[3] === gamearray[6]) && (gamearray[6] === 'x')) {
    return true
    // check for winning combo 5
  } else if ((gamearray[1] === gamearray[4]) && (gamearray[4] === gamearray[7]) && (gamearray[7] === 'x')) {
    return true
    // check for winning combo 6
  } else if ((gamearray[2] === gamearray[5]) && (gamearray[5] === gamearray[8]) && (gamearray[8] === 'x')) {
    return true
    // check for winning combo 7
  } else if ((gamearray[0] === gamearray[4]) && (gamearray[4] === gamearray[8]) && (gamearray[8] === 'x')) {
    return true
    // check for wining combo 8
  } else if ((gamearray[2] === gamearray[4]) && (gamearray[4] === gamearray[6]) && (gamearray[6] === 'x')) {
    return true
    // if no win by x - then return false
  } else {
    return false
  }
}

const winCounter = function (data) {
  for (let i = 0; i < data.games.length; i++) {
     let wins = 0
     if (totalWins(data.games[i].cells)) {
       wins ++
     }
     return wins
 }
}

module.exports = {
  makeMove,
  checkWinningCombos,
  totalWins,
  winCounter
}
