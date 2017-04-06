'use strict'

const getFormFields = require(`../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')
//const game = require('../scripts/gamelogic')

// let currentTurn = 'x'
// let cells = ['', '', '', '', '', '', '', '', '']
// let over = false

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

// const newBoard = function (event) {
//   // prevent page refresh
//   event.preventDefault()
// // create blank board array
//   cells = ['', '', '', '', '', '', '', '', '']
// // set the initial player to be "x"
//   currentTurn = 'x'
// // set the over variable to false since game is not over
//   over = false
// // clear the squares on the board
//   $('.square').text('')
// }
//
// // function to track game play, check for wins and log results
// const clickSquare = function (event) {
//   // prevent page from refreshing
//   event.preventDefault()
//   // make sure player can only continue if game is not yet finished
//   if (over === false) {
//     // check to see if the square has already been played
//     if ($(this).text()) {
//       console.log('This square has already been played')
//     // if square has not been played then check to which player made selection
//     } else {
//       // if player x made the selection
//       if (currentTurn === 'x') {
//         // retrieve the id from the clicked element and assign it to squareId
//         const squareId = $(this).attr('id')
//         // mark the square with an 'X'
//         $(this).text('X')
//         // call makeMove function to add move into cells array
//         game.makeMove(currentTurn, squareId, cells)
//         // call checkWinningCombos to see if game is over
//         over = game.checkWinningCombos(cells)
//         // update current turn to the next player
//         currentTurn = 'o'
//         // if player o made selection
//       } else {
//         // retrieve id from the clicked element and assign to squareId
//         const squareId = $(this).attr('id')
//         // mark the square with an 'O'
//         $(this).text('O')
//         // call makeMove function to add move into cells array
//         game.makeMove(currentTurn, squareId, cells, over)
//         // call checkWinningCombos to see if game is over
//         over = game.checkWinningCombos(cells)
//         // update current turn to the next player
//         currentTurn = 'x'
//       }
//     }
//   }
// }

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  // $('.square').on('click', clickSquare)
  // $('.newgame').on('click', newBoard)
}

module.exports = {
  addHandlers
  // newBoard,
  // cells,
  // over
}
