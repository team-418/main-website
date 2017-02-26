class CreateOpportunities < ActiveRecord::Migration
  def change
    create_table :opportunities do |t|
      t.string :opportunity_name
      t.string :opportunity_desc
      t.references :institution, index: true, foreign_key: true
      t.references :review, index: true, foreign_key: true
      t.references :time_period, index: true, foreign_key: true
      t.references :user, index: true, foreign_key: true
      t.references :skill, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
