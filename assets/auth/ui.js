'use strict'

const store = require('../scripts/store')
const events = require('../scripts/game/events-game')

const signUpSuccess = (data) => {
  console.log(data)
  // reveal the hidden elements of the board
  $('#signupmodal').modal('toggle')
  $('#signinmodal').modal('toggle')
}

const signUpFailure = (error) => {
  console.error(error)
  $('.signuperror').text('An error occurred. You may have entered invalid credentials. Try again.')
}

const signInSuccess = (input) => {
  console.log('signIn sucess ran. data is: ', input)
  store.user = input.user
  $('#signinmodal').modal('toggle')
  // reveal the hidden elements on the board
  $('.loginbuttons').removeClass('hidingbuttons')
  $('.initialbuttons').addClass('hidingbuttons')
  $('.newgame').text('Begin New Game')
  $('.results').text('')
}

const signInFailure = (error) => {
  console.error('signIn failure ran. error is: ', error)
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

const signOutFailure = (error) => {
  console.error('signOut failure ran. error is: ', error)
}

const changePasswordSuccess = () => {
  $('#newpasswordmodal').modal('toggle')
  // store.user = null
}

const changePasswordFailure = (error) => {
  console.error('password ran but.... error is: ', error)
  $('.passworderror').text('An error occurred. You may have entered the wrong password. Try again.')
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
