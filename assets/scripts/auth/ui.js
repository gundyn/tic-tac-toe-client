'use strict'

const store = require('./../store')

const onSignUpSuccess = (response) => {
  $('#message').text('Thanks for signing up for Tic-Tac-Toe! ' + response.user.email)
}

const onSignUpFailure = () => {
  $('#message').text('Sign up failed, plaese try again!')
}

const onSignInSuccess = (response) => {
  $('#message').text('Sign in succeful! ' + response.user.email)

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
  $('.game-board').hide()
  $('#sign-in-form')[0].reset()
}

const onSignOutFailure = () => {
  $('#message').text('Sign out failure, please try again!')
}

const onNewGameStartSucces = (response) => {
  $('#message').text('New game started, good luck have fun!')

  store.game = response.game

  $('#change-password-form').hide()
  $('.game-board').show()

  store.player = 'x'
}

const onNewGameStartFailure = () => {
  $('#message').text('Failed to start a new game, please try again!')
}

const onSquareClickSuccess = (response) => {
  $('#message').text('Nice move!')
  // need a nested function that changes the player on each click after the 'x' or 'o' has appeared on the game board
  // need a way to switch between printing an 'x' or 'o'
  // need a way to see who wins and if the game is over
  $(store.event.target).text('x')
  store.player = store.player === 'x' ? 'o' : 'x'
  console.log('stored player in onSquareClickSuccess', store.player)
  store.game = response.game
}

const onSquareClickFailure = () => {
  $('#message').text('Invalid move, try another!')
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
  onNewGameStartFailure,
  onSquareClickSuccess,
  onSquareClickFailure
}
