'use strict'

const store = require('../store')
const game = require('./gamelogic')

const createGameSuccess = (data) => {
  console.log(data)
  console.log('created a new game, woot!')
  console.log(store.game)
  store.game = data.game
  $('.shownboard').removeClass('hidingboard')
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
  let gamesWon = game.winCounter(data)
  console.log(gamesWon)
  //if (gamesWon > 0) {
  $('.totalWins').text('You have won ' + gamesWon + ' games! You jedi master!')
//  } else {
//  $('.totalWIns').text('You have won 0 games!')
  //}
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
