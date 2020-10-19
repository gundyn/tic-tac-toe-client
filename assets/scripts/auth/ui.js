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

  gameLogic()

  function changePlayer () {
    if (store.player === 'x') {
      $(store.event.target).text('x')
    } else if (store.player === 'o') {
      $(store.event.target).text('o')
    }
    store.player = store.player === 'x' ? 'o' : 'x'
  }

  function gameLogic () {
    if ($(store.event.target).text() === '') {
      changePlayer()
      $('#message').text('Great move!')
    } else if ($(store.event.target).text() === 'x') {
      $('#message').text('Invalid move, try again!')
    } else if ($(store.event.target).text() === 'o') {
      $('#message').text('Invalid move, try again!')
    }
    store.game = response.game
    determineWinner()
  }

  function determineWinner () {
    console.log('game board', store.event.target)
    console.log('the array of cells', store.game.cells)

    if (store.game.cells[0] === 'x' && store.game.cells[1] === 'x' && store.game.cells[2] === 'x') {
      $('#message').text('Top row wins!')
    } else if (store.game.cells[3] === 'x' && store.game.cells[4] === 'x' && store.game.cells[5] === 'x') {
      $('#message').text('Middle row wins!')
    } else if (store.game.cells[6] === 'x' && store.game.cells[7] === 'x' && store.game.cells[8] === 'x') {
      $('#message').text('Bottom row wins!')
    } else if (store.game.cells[0] === 'x' && store.game.cells[4] === 'x' && store.game.cells[8] === 'x') {
      $('#message').text('Diagonal row wins!')
    } else if (store.game.cells[2] === 'x' && store.game.cells[4] === 'x' && store.game.cells[6] === 'x') {
      $('#message').text('Diagonal row wins!')
    } else if (store.game.cells[0] === 'o' && store.game.cells[1] === 'o' && store.game.cells[2] === 'o') {
      $('#message').text('Top row wins!')
    } else if (store.game.cells[3] === 'o' && store.game.cells[4] === 'o' && store.game.cells[5] === 'o') {
      $('#message').text('Middle row wins!')
    } else if (store.game.cells[6] === 'o' && store.game.cells[7] === 'o' && store.game.cells[8] === 'o') {
      $('#message').text('Bottom row wins!')
    } else if (store.game.cells[0] === 'o' && store.game.cells[4] === 'o' && store.game.cells[8] === 'o') {
      $('#message').text('Diagonal row wins!')
    } else if (store.game.cells[2] === 'o' && store.game.cells[4] === 'o' && store.game.cells[6] === 'o') {
      $('#message').text('Diagonal row wins!')
    } else if (store.game.cells[0] !== '' && store.game.cells[1] !== '' && store.game.cells[2] !== '' && store.game.cells[3] !== '' && store.game.cells[4] !== '' && store.game.cells[5] !== '' && store.game.cells[6] !== '' && store.game.cells[7] !== '' && store.game.cells[8] !== '') {
      $('#message').text('Game is a tie!')
    }
  }
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
