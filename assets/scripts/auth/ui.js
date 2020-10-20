'use strict'

const store = require('./../store')

const onSignUpSuccess = (response) => {
  $('#message').text('Thanks for signing up for Tic-Tac-Toe! ' + response.user.email)
  $('#sign-up-form')[0].reset()
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
  $('#games-played').show()
}

const onSignInFailure = () => {
  $('#message').text('Sign in failed, please try again!')
}

const onChangePasswordSucces = (response) => {
  $('#message').text('Password change succeful!')
  $('#change-password-form')[0].reset()
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
  $('#games-played').hide()
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
  $('#start-new-game-form').hide()

  store.player = 'x'
  console.log('cells', store.game.cells)
}

const onNewGameStartFailure = () => {
  $('#message').text('Failed to start a new game, please try again!')
}

const onSquareClickSuccess = (response) => {
  $('#message').text('Nice move!')
  $('#start-new-game-form').show()
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

    let cells = store.game.cells

    if (cells[0] === 'x' && cells[1] === 'x' && cells[2] === 'x') {
      $('#message').text('Top row wins!')
      $('.game-board').hide()
    } else if (cells[3] === 'x' && cells[4] === 'x' && cells[5] === 'x') {
      $('#message').text('Middle row wins!')
      $('.game-board').hide()
    } else if (cells[6] === 'x' && cells[7] === 'x' && cells[8] === 'x') {
      $('#message').text('Bottom row wins!')
      $('.game-board').hide()
    } else if (cells[0] === 'x' && cells[4] === 'x' && cells[8] === 'x') {
      $('#message').text('Diagonal row wins!')
      $('.game-board').hide()
    } else if (cells[2] === 'x' && cells[4] === 'x' && cells[6] === 'x') {
      $('#message').text('Diagonal row wins!')
      $('.game-board').hide()
    } else if (cells[0] === 'x' && cells[3] === 'x' && cells[6] === 'x') {
      $('#message').text('Left column wins!')
      $('.game-board').hide()
    } else if (cells[1] === 'x' && cells[4] === 'x' && cells[7] === 'x') {
      $('#message').text('Middle column wins!')
      $('.game-board').hide()
    } else if (cells[2] === 'x' && cells[5] === 'x' && cells[8] === 'x') {
      $('#message').text('Right column wins!')
      $('.game-board').hide()
    } else if (cells[0] === 'o' && cells[1] === 'o' && cells[2] === 'o') {
      $('#message').text('Top row wins!')
      $('.game-board').hide()
    } else if (cells[3] === 'o' && cells[4] === 'o' && cells[5] === 'o') {
      $('#message').text('Middle row wins!')
      $('.game-board').hide()
    } else if (cells[6] === 'o' && cells[7] === 'o' && cells[8] === 'o') {
      $('#message').text('Bottom row wins!')
      $('.game-board').hide()
    } else if (cells[0] === 'o' && cells[4] === 'o' && cells[8] === 'o') {
      $('#message').text('Diagonal row wins!')
      $('.game-board').hide()
    } else if (cells[2] === 'o' && cells[4] === 'o' && cells[6] === 'o') {
      $('#message').text('Diagonal row wins!')
      $('.game-board').hide()
    } else if (cells[0] === 'o' && cells[3] === 'o' && cells[6] === 'o') {
      $('#message').text('Left column wins!')
      $('.game-board').hide()
    } else if (cells[1] === 'o' && cells[4] === 'o' && cells[7] === 'o') {
      $('#message').text('Middle column wins!')
      $('.game-board').hide()
    } else if (cells[2] === 'o' && cells[5] === 'o' && cells[8] === 'o') {
      $('#message').text('Right column wins!')
      $('.game-board').hide()
    } else if (cells[0] !== '' && cells[1] !== '' && cells[2] !== '' && cells[3] !== '' && cells[4] !== '' && cells[5] !== '' && cells[6] !== '' && cells[7] !== '' && cells[8] !== '') {
      $('#message').text('Game is a tie!')
      $('.game-board').hide()
    }
  }
}

const onSquareClickFailure = () => {
  $('#message').text('Invalid move, try another!')
}

const onGamesPlayedSuccess = (response) => {
  $('#message').text('Games played! ' + response.games.length)
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
  onSquareClickFailure,
  onGamesPlayedSuccess
}
