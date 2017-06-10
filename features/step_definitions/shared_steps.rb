Given "that the user has successfully loaded the website" do
  visit root_path
  @csrf_token = Nokogiri::HTML(page.html).css('meta[name="csrf-token"]').attr('content').value
end

Given(/^the user is signed in$/) do
  @user = create(:user)

  @res = post(
    '/api/users/sign_in.json',
    {
      user: {
        email: @user.email,
        password: @user.password
      }
    },
    {
      'X-CSRF-Token': @csrf_token,
     'X-Transaction': "Create New User Session"
    }
  )
  @parsed_res_body = JSON.parse!(@res.body)
end

Given "the user is NOT signed in" do
  # Create the user, but don't sign in
  @user = create(:user)
end


