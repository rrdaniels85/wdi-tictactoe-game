'use strict'

const store = require('../scripts/store')

const signUpSuccess = (data) => {
  console.log(data)
}

const signUpFailure = (error) => {
  console.error(error)
}

const signInSuccess = (data) => {
  console.log('signIn sucess ran. data is: ', data)
  store.user = data.user
}

const signInFailure = (error) => {
  console.error('signIn failure ran. error is: ', error)
}

const signOutSuccess = () => {
  console.log('And nothing was returned')
  store.user = null
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
