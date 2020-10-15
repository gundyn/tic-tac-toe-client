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
  $('#change-password-form').show()
  $('#sign-out-form').show()
  $('#start-new-game-form').show()
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
}

const onSignInFailure = () => {
  $('#message').text('Sign in failed, please try again!')
}

const onChangePasswordSucces = (response) => {
  $('#message').text('Password change succeful!')
}

const onChangePasswordFailure = () => {
  $('#message').text('Password change failure, please try again!')
}

const onSignOutSuccess = () => {
  $('#message').text('Sign out successful')

  $('#change-password-form').hide()
  $('#sign-out-form').hide()
  $('#start-new-game-form').hide()
  $('#sign-up-form').show()
  $('#sign-in-form').show()
}

const onSignOutFailure = () => {
  $('#message').text('Sign out failure, please try again!')
}

const onNewGameStartSucces = (response) => {
  $('#message').text('New game started, good luck have fun!')

  $('#change-password-form').hide()
}

const onNewGameStartFailure = () => {
  $('#message').text('Failed to start a new game, please try again!')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSucces,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onNewGameStartSucces,
  onNewGameStartFailure
}
