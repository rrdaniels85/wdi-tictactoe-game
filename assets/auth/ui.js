'use strict'

const store = require('../scripts/store')
const events = require('../scripts/game/events-game')

const signUpSuccess = (data) => {
  console.log(data)
  // reveal the hidden elements of the board
  $('.shownbuttons').removeClass('hidingbuttons')
}

const signUpFailure = (error) => {
  console.error(error)
}

const signInSuccess = (data) => {
  console.log('signIn sucess ran. data is: ', data)
  store.user = data.user
  // reveal the hidden elements on the board
  $('.shownbuttons').removeClass('hidingbuttons')
}

const signInFailure = (error) => {
  console.error('signIn failure ran. error is: ', error)
}

const signOutSuccess = () => {
  console.log('And nothing was returned')
  store.user = null
  // hide game board and associated buttons again
  $('.shownboard').addClass('hidingboard')
  $('.shownbuttons').addClass('hidingbuttons')
}

const signOutFailure = (error) => {
  console.error('signOut failure ran. error is: ', error)
}

const changePasswordSuccess = () => {
  console.log('you changed your password!')
  store.user = null
}

const changePasswordFailure = (error) => {
  console.error('password ran but.... error is: ', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
