class Role < ActiveRecord::Base
  validates :name, presence: true
  has_many :user, foreign_key: :role
end
