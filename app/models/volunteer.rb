class Volunteer < ActiveRecord::Base
  has_many :time_period
  has_many :review
  has_many :skill
end
