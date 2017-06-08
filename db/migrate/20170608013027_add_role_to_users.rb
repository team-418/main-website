class AddRoleToUsers < ActiveRecord::Migration
  def change
    add_foreign_key :users, :roles, column: :role, index: true
    add_index :users, :role
  end
end
