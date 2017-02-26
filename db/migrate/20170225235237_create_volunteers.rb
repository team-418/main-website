class CreateVolunteers < ActiveRecord::Migration
  def change
    create_table :volunteers do |t|
      t.references :time_period, index: true, foreign_key: true
      t.string :status
      t.boolean :communication_opt_out

      t.timestamps null: false
    end
  end
end
