'use strict'

const getFormFields = require(`../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')
const game = require('../scripts/gamelogic')

let currentTurn = 'x'
let cells = []
let over = false

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log('you clicked sign up')
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('sign in ran')
  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('sign out ran')
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('change password ran!')
  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const newBoard = function (event) {
  // prevent page refresh
  event.preventDefault()
// create blank board array
  cells = ['', '', '', '', '', '', '', '', '']
// set the initial player to be "x"
  currentTurn = 'x'
  over = false
  console.log(currentTurn + ' begins the game')
}

const clickSquare = function (event) {
  event.preventDefault()
  if(over === false){
  console.log('yep, you clicked that square')
  const squareId = $(this).attr('id')
  if ($(this).text()) {
    console.log('This square has already been played')
  } else {
    if (currentTurn === 'x') {
  // $(this).html("<img src='assets/styles/images/jedi-yoda.jpg'>")
    $(this).text('X')
      game.makeMove(currentTurn, squareId, cells, over)
      currentTurn = 'o'
    } else {
    $(this).text('O')
      game.makeMove(currentTurn, squareId, cells, over)
      currentTurn = 'x'
    }
  }
  console.log(cells)
  console.log(currentTurn)
  console.log(over)
}
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('.square').on('click', clickSquare)
  $('.newgame').on('click', newBoard)
}

module.exports = {
  addHandlers,
  newBoard,
  cells,
  over
}
