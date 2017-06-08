class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :time_period
  has_many :review
  has_many :skill
  belongs_to :role, foreign_key: :role

  validates :role, :first_name, :last_name, presence: true
end
