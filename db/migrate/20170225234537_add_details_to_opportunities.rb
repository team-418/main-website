class AddDetailsToOpportunities < ActiveRecord::Migration
  def change
    add_column :opportunities, :volunteers_notified, :text, array: true, default: []
  end
end
