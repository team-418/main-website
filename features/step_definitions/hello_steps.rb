# npage = Nokogiri::HTML(page.html)
#
# signup
# post(
#   '/api/users.json',
#   {
#     user: {
#       email: 'testing0@email.com',
#       password: 'password',
#       password_confirmation: 'password',
#       first_name: 'josiah',
#       last_name: 'berkebile',
#       role: 'advisor',
#       zip: '12345'
#     }
#   },
#   { 'X-CSRF-Token': npage.css('meta[name="csrf-token"]').attr('content').value }
# )
#
# signin
# post(
#   '/api/users/sign_in.json',
#   { user: { email: 'testing0@email.com', password: 'password', donkey: 1 } },
#   { 'X-CSRF-Token': npage.css('meta[name="csrf-token"]').attr('content').value }
# )
#
# signout
# delete(
#   '/api/users/sign_out.json',
#   { 'X-CSRF-Token': npage.css('meta[name="csrf-token"]').attr('content').value }
# )

Given "that the user has successfully loaded the website" do
  visit root_path
  @csrf_token = Nokogiri::HTML(page.html).css('meta[name="csrf-token"]').attr('content').value
end

When "the user signs up with an unregistered e-mail" do
  # There is a known problem in Rack where they are using a method `join'
  # that doesn't exist in the Rack::MockResponse objects returned in tests.
  # I get around that here by creating @body as a new object since this issue prevents
  # access to the body portion of the response after parsing into a Ruby Hash if that
  # Hash is stored back to @res.body.
  @res = post(
    '/api/users.json',
    {
      user: {
        email: 'testing1@email.com',
        password: 'password',
        password_confirmation: 'password',
        first_name: 'josiah',
        last_name: 'berkebile',
        zip: '12345'
      }
    },
    { 'X-CSRF-Token': @csrf_token }
  )
  @parsed_res_body = JSON.parse!(@res.body)
end

Then "the server should indicate it registered a new user via a 201: Created status" do
  expect(@res.status).to be(201)
end

And "the server should provide the ID of the user it created." do
  expect(@parsed_res_body['id']).to be > 0
end

When "the user signs up with a registered e-mail" do
  @res = post(
    '/api/users.json',
    {
      user: {
        email: 'testing@email.com',
        password: 'password',
        password_confirmation: 'password',
        first_name: 'josiah',
        last_name: 'berkebile',
        role: 'advisor',
        zip: '12345'
      }
    },
    { 'X-CSRF-Token': @csrf_token }
  )
  @parsed_res_body = JSON.parse!(@res.body)
end

Then "the server should indicate an error via a 422: Unprocessable Entity code" do
  expect(@res.status).to be(422)
end

And "the json response should indicate the reason for the failure is that the e-mail is already taken" do
  expect(@parsed_res_body).to eq({"errors" => {"email" => ["has already been taken"]}})
end

When "the user signs up with a mismatched password and password_confirmation pair" do
  @res = post(
    '/api/users.json',
    {
      user: {
        email: 'testing0@email.com',
        password: 'password',
        password_confirmation: 'blarg',
        first_name: 'josiah',
        last_name: 'berkebile',
        role: 'advisor',
        zip: '12345'
      }
    },
    { 'X-CSRF-Token': @csrf_token }
  )
  @parsed_res_body = JSON.parse!(@res.body)
end

And "the json response should indicate the reason for the failure is that the password and password_confirmation didn't match" do
  expect(@parsed_res_body).to eq({"errors" => {"password_confirmation" => ["doesn't match Password"]}})
end

When "the user signs up without providing a password" do
  @res = post(
    '/api/users.json',
    {
      user: {
        email: 'testing0@email.com',
        password: '',
        password_confirmation: '',
        first_name: 'josiah',
        last_name: 'berkebile',
        role: 'advisor',
        zip: '12345'
      }
    },
    { 'X-CSRF-Token': @csrf_token }
  )
  @parsed_res_body = JSON.parse!(@res.body)
end

And "the json response should indicate the reason for the failure is that a password wasn't provided" do
  expect(@parsed_res_body).to eq({"errors" => {"password" => ["can't be blank"]}})
end

When "the user signs up without providing an e-mail" do
  @res = post(
    '/api/users.json',
    {
      user: {
        email: '',
        password: 'password',
        password_confirmation: 'password',
        first_name: 'josiah',
        last_name: 'berkebile',
        role: 'advisor',
        zip: '12345'
      }
    },
    { 'X-CSRF-Token': @csrf_token }
  )
  @parsed_res_body = JSON.parse!(@res.body)
end

And "the json response should indicate the reason for the failure is that an e-mail wasn't provided" do
  expect(@parsed_res_body).to eq({"errors" => {"email" => ["can't be blank"]}})
end
