'use strict'

const store = require('../store')

const createGameSuccess = (data) => {
  console.log(data)
  console.log('created a new game, woot!')
  console.log(store.game)
  store.game = data.game
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
  console.log(data.games)
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
