class CreateTimePeriods < ActiveRecord::Migration
  def change
    create_table :time_periods do |t|
      t.datetime :start_date
      t.datetime :end_date

      t.timestamps null: false
    end
  end
end
