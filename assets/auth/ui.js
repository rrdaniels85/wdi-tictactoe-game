'use strict'

const store = require('../scripts/store')
const events = require('../scripts/game/events-game')

const signUpSuccess = (data) => {
  // reveal the hidden elements of the board
  $('#signupmodal').modal('toggle')
  $('#signinmodal').modal('toggle')
}

const signUpFailure = () => {
  // let user know they made an error signing up
  $('.signuperror').text('An error occurred. You may have entered invalid credentials. Try again.')
}

const signInSuccess = (input) => {
  store.user = input.user
  $('#signinmodal').modal('toggle')
  // reveal the hidden elements on the board
  $('.loginbuttons').removeClass('hidingbuttons')
  $('.initialbuttons').addClass('hidingbuttons')
  $('.newgame').text('Begin New Game')
  $('.results').text('')
}

const signInFailure = () => {
  // let user know they made an error signing in
  $('.signinerror').text('An error occurred. You may have entered invalid credentials. Try again.')
}

const signOutSuccess = () => {
  store.user = null
  $('#signoutmodal').modal('toggle')
  // hide game board and associated buttons again
  $('.shownboard').addClass('hidingboard')
  $('.loginbuttons').addClass('hidingbuttons')
  $('.initialbuttons').removeClass('hidingbuttons')
}

const changePasswordSuccess = () => {
  $('#newpasswordmodal').modal('toggle')
}

const changePasswordFailure = () => {
  $('.passworderror').text('An error occurred. You may have entered the wrong password. Try again.')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  changePasswordSuccess,
  changePasswordFailure
}
