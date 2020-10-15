curl "https://tic-tac-toe-api-development.herokuapp.com"
  --include \
  --request POST \
  --header "Content-Type: application/JSON" \
  --data '{
    "credentials": {
      "email": "an@example.email",
      "password": "an example password",
      "password_confirmation": "an example password"
    }
  }'
