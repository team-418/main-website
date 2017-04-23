class UpdateUsers < ActiveRecord::Migration
  def change
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :role, :integer
    add_column :users, :postal_code, :string
    add_column :users, :phone_numbers, :integer, array: true

    remove_column :users, :user_name, :string
    remove_column :users, :roles, :text, array: true
    remove_column :users, :current_role, :string

    remove_column :users, :home_phone, :integer
    remove_column :users, :cell_phone, :integer
  end
end
