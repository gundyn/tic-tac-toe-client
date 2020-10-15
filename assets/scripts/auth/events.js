'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')

const onSignUp = (event) => {
  event.preventDefault()
  console.log('event is: ', event)

  const form = event.target

  const data = getFormFields(form)
  console.log('what is form: ', form)

  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

module.exports = {
  onSignUp
}
