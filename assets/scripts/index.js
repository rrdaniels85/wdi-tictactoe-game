'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')

// create an array that represents the tic tac toe squares that have
// been selected during the course of a game; will be updated with
// each player's new move until the game's end
let squaresInPlay=['', '', '', '', '', '', '', '', '']

let currentTurn = ''

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
