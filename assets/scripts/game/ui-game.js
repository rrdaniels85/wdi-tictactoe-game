'use strict'

const store = require('../store')
const game = require('./gamelogic')

const createGameSuccess = (data) => {
  console.log(data)
  console.log('created a new game, woot!')
  console.log(store.game)
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
  console.log('no new game for you, boo!')
}

const updateGameSuccess = (data) => {
  console.log(data)
  console.log('Game is updated all right!')
}

const updateGameFailure = (error) => {
  console.error(error)
  console.log('Game update did not work - sadness')
}

const getGamesSuccess = (data) => {
  console.log(data)
  // create a variable to sgtore total number of wins
  let gamesWon = game.winCounter(data)
  console.log(gamesWon)
  // display total number of wins
  $('.gamewins').text('You have won ' + gamesWon + ' game(s)!')
}

const getGamesFailure = (error) => {
  console.error(error)
  console.log('Game update did not work - sadness')
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure,
  getGamesSuccess,
  getGamesFailure
}
