'use strict'

const store = require('./../store')

const onSignUpSuccess = (response) => {
  $('#message').text('Thanks for signing up for Tic-Tac-Toe! ' + response.user.email)
}

const onSignUpFailure = () => {
  $('#message').text('Sign up failed, plaese try again!')
}

const onSignInSuccess = (response) => {
  $('#message').text('Sign in succeful! ' + response.user.token)

  store.user = response.user
}

const onSignInFailure = () => {
  $('#message').text('Sign in failed, please try again!')
}
module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure
}
