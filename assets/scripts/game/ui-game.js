'use strict'

const store = require('../store')
const game = require('./gamelogic')

const createGameSuccess = (data) => {
  console.log(data)
  // store the new game data
  store.game = data.game
  // change the text in the button to be reset game after clicked
  $('.newgame').text('Reset Game')
  // display the board which was previously hidden
  $('.shownboard').removeClass('hidingboard')
  // clear the results text
  $('.results').text('')
}

const createGameFailure = (error) => {
  console.error(error)
}

const updateGameSuccess = (data) => {
  console.log(data)
}

const updateGameFailure = (error) => {
  console.error(error)
}

const getGamesSuccess = (data) => {
  console.log(data)
  // create a variable to sgtore total number of wins
  let gamesWon = game.winCounter(data)
  // display total number of wins
  $('.gamewins').text('You have won ' + gamesWon + ' game(s)!')
}

const getGamesFailure = (error) => {
  console.error(error)
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure,
  getGamesSuccess,
  getGamesFailure
}
