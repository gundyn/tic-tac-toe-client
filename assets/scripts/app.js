'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./auth/events')

$(() => {
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#sign-in-form').on('submit', events.onSignIn)
  $('#change-password-form').on('submit', events.onChangePassword)
  $('#sign-out-form').on('submit', events.onSignOut)
  $('#start-new-game-form').on('submit', events.onNewGameStart)
  $('#change-password-form').hide()
  $('#sign-out-form').hide()
  $('#start-new-game-form').hide()
  $('.game-board').hide()
  $('.game-square').on('click', events.onSquareClick)
  $('#games-played').on('click', events.onGamesPlayed)
  $('#games-played').hide()
})
