'use strict'

// const store = require('./../store')

const onSignUpSuccess = (response) => {
  $('#message').text('Thanks for signing up for Tic-Tac-Toe! ' + response.user.email)
}

const onSignUpFailure = () => {
  $('#message').text('Sign up failed, plaese try again!')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure
}
