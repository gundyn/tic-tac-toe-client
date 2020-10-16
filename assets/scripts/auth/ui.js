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
}

const onSignOutFailure = () => {
  $('#message').text('Sign out failure, please try again!')
}

const onNewGameStartSucces = (response) => {
  console.log('new game start success', response)
  $('#message').text('New game started, good luck have fun!')

  store.game = response.game
  console.log('stored game', store.game)

  $('#change-password-form').hide()
  $('.game-board').show()

  store.player = 'x'
  console.log('the stored player', store.player)
}

const onNewGameStartFailure = () => {
  $('#message').text('Failed to start a new game, please try again!')
}

const onSquareClickSuccess = (response) => {
  $('#message').text('Nice move!')
  $('.game-square').text('x')
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
