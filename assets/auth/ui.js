'use strict'

const store = require('../scripts/store')
const events = require('../scripts/game/events-game')

const signUpSuccess = (data) => {
  console.log(data)
  console.log('you signed up buddy')
  // reveal the hidden elements of the board
  $('#signupmodal').modal('toggle')
  $('#signinmodal').modal('toggle')
}

const signUpFailure = (error) => {
  console.error(error)
  $('.signuperror').text('An error occurred. You may have entered credentials incorrectly. Try again.')
}

const signInSuccess = (input) => {
  console.log('signIn sucess ran. data is: ', input)
  store.user = input.user
  $('#signinmodal').modal('toggle')
  // reveal the hidden elements on the board
  $('.loginbuttons').removeClass('hidingbuttons')
  $('.initialbuttons').addClass('hidingbuttons')
  $('.newgame').text('Begin New Game')
}

const signInFailure = (error) => {
  console.error('signIn failure ran. error is: ', error)
  $('.signinerror').text('An error occurred. You may have used the incorrect credentials. Try again.')
}

const signOutSuccess = () => {
  console.log('And nothing was returned')
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
  console.log('you changed your password!')
  $('#newpasswordmodal').modal('toggle')
  // store.user = null
}

const changePasswordFailure = (error) => {
  console.error('password ran but.... error is: ', error)
  $('.passworderror').text('An error occurred. You may have entered the incorrect old password. Try again.')
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
