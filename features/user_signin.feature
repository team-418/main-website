Feature: User sign-in
  As a product manager
  I want users to be able to sign in to the website
  So that they can use the features of the site that require authentication

Scenario: An existing user signs in with the correct password
  Given that the user has successfully loaded the website
  And the user exists in the database
  When the user enters the correct password
  Then the server should indicate it logged the user into a new session via a 201: Created status

Scenario: An existing user signs in with the wrong password
  Given that the user has successfully loaded the website
  And the user exists in the database
  When the user enters an incorrect password
  Then the server should indicate it did NOT log the user into a new session via a 401: Unauthorized status
  And the json response should indicate the reason for the failure is that the username or password was wrong

Scenario: An existing user signs in with an unrecognized e-mail
  Given that the user has successfully loaded the website
  And the user does NOT exist in the database
  When the user tries to sign-in
  Then the server should indicate it did NOT log the user into a new session via a 401: Unauthorized status
  And the json response should indicate the reason for the failure is that the username or password was wrong
