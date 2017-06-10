And(/^the user exists in the database$/) do
  @user = create(:user)
  @post_params = { user: { email: @user.email } }
end

When(/^the user enters the correct password$/) do
  @post_params[:user].merge!(password: @user.password)

  @res = post(
    '/api/users/sign_in.json',
    @post_params,
    {
      'X-CSRF-Token': @csrf_token,
      'X-Transaction': "Create New User Session"
    }
  )
  @parsed_res_body = JSON.parse!(@res.body)
end

Then(/^the server should indicate it logged the user into a new session via a (\d+): Created status$/) do |arg1|
  expect(@res.status).to be(201)
end

When(/^the user enters an incorrect password$/) do
  @post_params[:user].merge!(password: 'any incorrect password')

  @res = post(
    '/api/users/sign_in.json',
    @post_params,
    {
      'X-CSRF-Token': @csrf_token,
     'X-Transaction': "Create New User Session"
    }
  )
  @parsed_res_body = JSON.parse!(@res.body)
end

Then(/^the server should indicate it did NOT log the user into a new session via a (\d+): Unauthorized status$/) do |arg1|
  expect(@res.status).to be(401)
end

And(/^the json response should indicate the reason for the failure is that the username or password was wrong$/) do
  expect(@parsed_res_body).to eq({ "error" => "Invalid Email or password." })
end

Given(/^the user does NOT exist in the database$/) do
  # Do nothing - we want the user to NOT be in the database
end

When(/^the user tries to sign\-in$/) do
  # it doesn't matter what information we user here, because the user doesn't exist
  @res = post(
    '/api/users/sign_in.json',
    {
      user: {
        email: 'test@email.com',
        password: 'password'
      }
    },
    {
      'X-CSRF-Token': @csrf_token,
     'X-Transaction': "Create New User Session"
    }
  )
  @parsed_res_body = JSON.parse!(@res.body)
end
