class Opportunity < ActiveRecord::Base
  belongs_to :institution
  belongs_to :review
  belongs_to :user
  has_many :skill
end
