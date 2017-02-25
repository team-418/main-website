class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.decimal :score
      t.text :comment

      t.timestamps null: false
    end
  end
end
