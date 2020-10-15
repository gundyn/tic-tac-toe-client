'use strict'

const config = require('./../config')
// const store = require('./../store')

const signUp = (data) => {
  console.log('data is: ', data)
  return $.ajax({
    url: config.apiUrl + 'development',
    method: 'POST',
    data: data
  })
}

module.exports = {
  signUp
}
