Feature: User Sign-Up
As a product manager
I want users to be able to sign up for the website
So that they can use the site to connect with other users

Scenario: A user signs up with an unregistered e-mail
Given that the user has successfully loaded the website
When the user signs up with an unregistered e-mail
Then the server should indicate it registered a new user via a 201: Created status
And the server should provide the ID of the user it created.

Scenario: A user signs up with an existing e-mail
Given that the user has successfully loaded the website
When the user signs up with a registered e-mail
Then the server should indicate an error via a 422: Unprocessable Entity code
And the json response should indicate the reason for the failure is that the e-mail is already taken

Scenario: A user attempts to sign-up when the password and password_confirmation don't match
Given that the user has successfully loaded the website
When the user signs up with a mismatched password and password_confirmation pair
Then the server should indicate an error via a 422: Unprocessable Entity code
And the json response should indicate the reason for the failure is that the password and password_confirmation didn't match

Scenario: A user attempts to sign-up without providing a password
Given that the user has successfully loaded the website
When the user signs up without providing a password
Then the server should indicate an error via a 422: Unprocessable Entity code
And the json response should indicate the reason for the failure is that a password wasn't provided

Scenario: A user attempts to sign-up without providing an e-mail
Given that the user has successfully loaded the website
When the user signs up without providing an e-mail
Then the server should indicate an error via a 422: Unprocessable Entity code
And the json response should indicate the reason for the failure is that an e-mail wasn't provided
