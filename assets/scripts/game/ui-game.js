'use strict'

const store = require('../store')

const createGameSuccess = (data) => {
  console.log(data)
}

const createGameFailure = (error) => {
  console.error(error)
}

module.exports = {
  createGameSuccess,
  createGameFailure
}
