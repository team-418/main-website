When(/^the user tries to sign\-out$/) do
  @res = delete(
    'api/users/sign_out.json',
    { 'X-Transaction': 'Destroy Current User Session' }
  )
end

Then "the server should indicate it destroyed the current user's session via a 204: No Content status" do
  expect(@res.status).to be(204)
end

Then(/^the json response should indicate the user was signed\-out$/) do
  expect(@parsed_res_body).to eq({ "success" => true })
end

Then(/^the json response should indicate there was nothnig to do since the user wasn't signed-in$/) do
  expect(@parsed_res_body).to eq(nil)
end
