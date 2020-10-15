'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')

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

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onNewGameStart
}
