class RemoveTimePeriodsFromOpportunities < ActiveRecord::Migration
  def change
    remove_reference :opportunities, :time_period
  end
end
