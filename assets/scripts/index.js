'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// game board array to reflect which squares have been played and by who
let squaresInPlay=['', '', '', '', '', '', '', '', '']

let currentTurn = ''

// compare current squaresInPlay array against possible wins or draw
const checkWinningCombos = function (gamearray) {
  // check for winning combo 1
  if ((gamearray[0] === gamearray[1]) && (gamearray[1] === gamearray[2]) && (gamearray[2] !== '')) {
    let winningPlayer = gamearray[0]
    console.log('Player ' + winningPlayer + ' wins!')
    // check for winning combo 2
  } else if ((gamearray[3] === gamearray[4]) && (gamearray[4] === gamearray[5]) && (gamearray[5] !== '')) {
    let winningPlayer = gamearray[3]
    console.log('Player ' + winningPlayer + ' wins!')
    // check for winning combo 3
  } else if ((gamearray[6] === gamearray[7]) && (gamearray[7] === gamearray[8]) && (gamearray[8] !== '')) {
    let winningPlayer = gamearray[6]
    console.log('Player ' + winningPlayer + ' wins!')
    // check for winning combo 4
  } else if ((gamearray[0] === gamearray[3]) && (gamearray[3] === gamearray[6]) && (gamearray[6] !== '')) {
    let winningPlayer = gamearray[0]
    console.log('Player ' + winningPlayer + ' wins!')
    // check for winning combo 5
  } else if ((gamearray[1] === gamearray[4]) && (gamearray[4] === gamearray[7]) && (gamearray[7] !== '')) {
    let winningPlayer = gamearray[1]
    console.log('Player ' + winningPlayer + ' wins!')
    // check for winning combo 6
  } else if ((gamearray[2] === gamearray[5]) && (gamearray[5] === gamearray[8]) && (gamearray[8] !== '')) {
    let winningPlayer = gamearray[2]
    console.log('Player ' + winningPlayer + ' wins!')
    // check for winning combo 7
  } else if ((gamearray[0] === gamearray[4]) && (gamearray[4] === gamearray[8]) && (gamearray[8] !== '')) {
    let winningPlayer = gamearray[0]
    console.log('Player ' + winningPlayer + ' wins!')
  } else if ((gamearray[2] === gamearray[4]) && (gamearray[4] === gamearray[6]) && (gamearray[6] !== '')) {
  let winningPlayer = gamearray[2]
    console.log('Player ' + winningPlayer + ' wins!')
    // if all squares filled in with no win combo - notify it's a draw
  } else if (gamearray.indexOf('') === -1) {
    console.log('It is a draw! Game Over, no winners. Boo!')
  // if none of the above - continue playing
  } else {
    console.log('keep on playing guys!')
  }
}

// Function to create a new board when the 'new game' button is clicked
const newBoard = function () {
// set the initial player to be "x"
  currentTurn = 'x'
}

// function to update who has the current move (x or o) - maybe later updateTurn into a conditional stmt
const updateTurn = function (playerId) {
  if (playerId === 'x') {
    currentTurn = 'o'
  } else {
    currentTurn = 'x'
  }
}

const makeMove = function (playerId, squareId) {
  // when player clicks a square, let the correct image display

  // when player clicks a square have the value of currentTurn pushed into the corresponding index of the squaresInPlay array; convert the squareId into a number from a string with +
  squaresInPlay[+squareId] = playerId
  // check to see if there is a winning combination
  checkWinningCombos(squaresInPlay)
  // if no winning combo, change to next player's turn
  updateTurn(playerId)
}

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')

// create an array that represents the tic tac toe squares that have
// been selected during the course of a game; will be updated with
// each player's new move until the game's end
let squaresInPlay=['', '', '', '', '', '', '', '', '']

let currentTurn = ''

// compare current squaresInPlay array against possible wins or draw
const checkWinningCombos = function (gamearray) {
  // check for winning combo 1
  if ((gamearray[0] === gamearray[1]) && (gamearray[1] === gamearray[2]) && (gamearray[2] !== '')) {
    let winningPlayer = gamearray[0]
    console.log('Player ' + winningPlayer + ' wins!')
    // check for winning combo 2
  } else if ((gamearray[3] === gamearray[4]) && (gamearray[4] === gamearray[5]) && (gamearray[5] !== '')){
    let winningPlayer = gamearray[3]
    console.log('Player ' + winningPlayer + ' wins!')
    // check for winning combo 3
  } else if ((gamearray[6] === gamearray[7]) && (gamearray[7] === gamearray[8]) && (gamearray[8] !== '')) {
    let winningPlayer = gamearray[6]
    console.log('Player ' + winningPlayer + ' wins!')
    // check for winning combo 4
  } else if ((gamearray[0] === gamearray[3]) && (gamearray[3] === gamearray[6]) && (gamearray[6] !== '')) {
    let winningPlayer = gamearray[0]
    console.log('Player ' + winningPlayer + ' wins!')
    // check for winning combo 5
  } else if ((gamearray[1] === gamearray[4]) && (gamearray[4] === gamearray[7]) && (gamearray[7] !== '')) {
    let winningPlayer = gamearray[1]
    console.log('Player ' + winningPlayer + ' wins!')
    // check for winning combo 6
  } else if ((gamearray[2] === gamearray[5]) && (gamearray[5] === gamearray[8]) && (gamearray[8] !== '')) {
    let winningPlayer = gamearray[2]
    console.log('Player ' + winningPlayer + ' wins!')
    // check for winning combo 7
  } else if ((gamearray[0] === gamearray[4]) && (gamearray[4] === gamearray[8]) && (gamearray[8] !== '')) {
    let winningPlayer = gamearray[0]
    console.log('Player ' + winningPlayer + ' wins!')
  } else if ((gamearray[2] === gamearray[4]) && (gamearray[4] === gamearray[6]) && (gamearray[6] !== '')) {
  let winningPlayer = gamearray[2]
    console.log('Player ' + winningPlayer + ' wins!')
    // if all squares filled in with no win combo - notify it's a draw
  } else if (gamearray.indexOf('') === -1) {
    console.log('It is a draw! Game Over, no winners. Boo!')
  // if none of the above - continue playing
  } else {
    console.log('keep on playing guys!')
  }
}

// Function to create a new board when the 'new game' button is clicked
const newBoard = function () {
// set the initial player to be "x"
  currentTurn = 'x'
}

// function to update who has the current move (x or o) - maybe later updateTurn into a conditional stmt
const updateTurn = function (playerId) {
  if (playerId === 'x') {
    currentTurn = 'o'
  } else {
    currentTurn = 'x'
  }
}

const makeMove = function (playerId, squareId) {
  // when player clicks a square, let the correct image display

  // when player clicks a square have the value of currentTurn pushed into the corresponding index of the squaresInPlay array; convert the squareId into a number from a string with +
  squaresInPlay[+squareId] = playerId
  // check to see if there is a winning combination

  // if no winning combo, change to next player's turn
  return updateTurn(playerId);
}
