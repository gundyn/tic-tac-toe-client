#!/bin/bash

curl "https://tic-tac-toe-api-development.herokuapp.com" \
  --include \
  --request POST \
  --header "Content-Type: application/JSON" \
  --data '{
    "credentials": {
      "email": "email",
      "password": "password",
      "password_confirmation": "password_confirmation"
    }
  }'

  echo
