'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')
const store = require('./../store')

const onSignUp = (event) => {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)

  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = (event) => {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)

  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onChangePassword = (event) => {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)

  api.changePassword(data)
    .then(ui.onChangePasswordSucces)
    .catch(ui.onChangePasswordFailure)
}

const onSignOut = (event) => {
  event.preventDefault()

  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const onNewGameStart = (event) => {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)

  api.newGame(data)
    .then(ui.onNewGameStartSucces)
    .catch(ui.onNewGameStartFailure)
}

const onSquareClick = (event) => {
  event.preventDefault()

  const clickedCell = event.target

  const cellIndex = $(clickedCell).attr('data-cell-index')

  const data = {
    game: {
      cell: {
        index: cellIndex,
        value: store.player
      },
      over: false
    }
  }
  // console.log('onSquareClick clicked clickedCell', clickedCell)
  // console.log('game board event', cellIndex)
  // console.log('current player in events.js onSquareClick', store.player)

  store.event = event

  api.squareClick(data)
    .then(ui.onSquareClickSuccess)
    .catch(ui.onSquareClickFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onNewGameStart,
  onSquareClick
}
