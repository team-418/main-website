class AddUserForeignKeyToVolunteers < ActiveRecord::Migration
  def change
    add_reference :volunteers, :user, index: true, foreign_key: true
  end
end
