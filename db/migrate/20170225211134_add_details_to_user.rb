class AddDetailsToUser < ActiveRecord::Migration
  def change
    add_column :users, :user_name, :string
    add_column :users, :roles, :string
    add_column :users, :current_role, :string
    add_column :users, :home_phone, :integer
    add_column :users, :cell_phone, :integer
    add_column :users, :background_check_complete, :boolean
    add_column :users, :last_background_check, :datetime
  end
end
