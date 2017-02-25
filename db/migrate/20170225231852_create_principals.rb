class CreatePrincipals < ActiveRecord::Migration
  def change
    create_table :principals do |t|
      t.datetime :created_at
      t.datetime :last_updated_at
      t.references :user, index: true, foreign_key: true
      t.references :institution, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
