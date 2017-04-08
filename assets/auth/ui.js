'use strict'

const store = require('../scripts/store')
const events = require('../scripts/game/events-game')

const signUpSuccess = (data) => {
  console.log(data)
  console.log('you signed up buddy')
  // reveal the hidden elements of the board
  $('#sign-up').find('input:text, input:password, select, textarea').val('');
  $('#signupmodal').modal('toggle')
  $('#signinmodal').modal('toggle')
}

const signUpFailure = (error) => {
  console.error(error)
}

const signInSuccess = (input) => {
  console.log('signIn sucess ran. data is: ', input)
  store.user = input.user
  $('#sign-in').find('input:text, input:password, input:password, select, textarea').val('');
  $('#signinmodal').modal('toggle')
  // reveal the hidden elements on the board
  $('.loginbuttons').removeClass('hidingbuttons')
  $('.initialbuttons').addClass('hidingbuttons')
  $('.newgame').text('Begin New Game')
}

const signInFailure = (error) => {
  console.error('signIn failure ran. error is: ', error)
}

const signOutSuccess = () => {
  console.log('And nothing was returned')
  store.user = null
  $('#signoutmodal').modal('toggle')
  // hide game board and associated buttons again
  $('.shownboard').addClass('hidingboard')
  $('.loginbuttons').addClass('hidingbuttons')
  $('.initialbuttons').removeClass('hidingbuttons')
  $('.results').text('')
}

const signOutFailure = (error) => {
  console.error('signOut failure ran. error is: ', error)
}

const changePasswordSuccess = () => {
  console.log('you changed your password!')
  $('#change-password').find('input:password, select, textarea').val('');
  $('#newpasswordmodal').modal('toggle')
  // store.user = null
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
