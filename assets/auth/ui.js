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
}

const signInSuccess = (input) => {
  console.log('signIn sucess ran. data is: ', input)
  store.user = input.user
   $('#signinmodal').modal('toggle')
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
