FactoryGirl.define do
  factory :user do
    email 'test@email.com'
    password 'password'
    password_confirmation 'password'
    first_name 'test'
    last_name 'test'
    role 1
    postal_code 12345
  end
end
