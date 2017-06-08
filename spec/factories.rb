FactoryGirl.define do
  factory :role do
    id 2
    name "advisor"
  end

  factory :user do
    email 'test@email.com'
    password 'password'
    password_confirmation 'password'
    first_name 'test'
    last_name 'test'
    postal_code 12345
    association :role, factory: :role, id: 2
  end
end
