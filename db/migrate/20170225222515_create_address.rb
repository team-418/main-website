class CreateAddress < ActiveRecord::Migration
  def change
    create_table :addresses do |t|
      t.text :address_line_1
      t.text :address_line_2
      t.text :city
      t.text :state
      t.integer :zipcode
      t.string :country
      t.string :text
    end
  end
end
