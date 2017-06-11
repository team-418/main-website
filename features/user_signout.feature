Feature: User Sign-Out
  As a product manager
  I want users to be able to sign out of the website
  So that they can protect their account from unauthorized access

Scenario: A signed in user requests to sign out
  Given that the user has successfully loaded the website
  And the user is signed in
  When the user tries to sign-out
  Then the server should indicate it destroyed the current user's session via a 204: No Content status
  And the json response should indicate the user was signed-out

Scenario: A signed out user requests to sign out
  Given that the user has successfully loaded the website
  And the user is NOT signed in
  When the user tries to sign-out
  Then the server should indicate it destroyed the current user's session via a 204: No Content status
  And the json response should indicate there was nothnig to do since the user wasn't signed-in
