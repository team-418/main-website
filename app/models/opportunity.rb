class Opportunity < ActiveRecord::Base
  belongs_to :institution
  belongs_to :period
  belongs_to :review
  belongs_to :user
  belongs_to :skill
end
