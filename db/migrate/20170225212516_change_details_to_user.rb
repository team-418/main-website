class ChangeDetailsToUser < ActiveRecord::Migration
  def change
    remove_column :users, :roles
    add_column :users, :roles,:text, array:true, default: []
  end
end
