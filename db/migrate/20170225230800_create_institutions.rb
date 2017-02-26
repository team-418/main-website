class CreateInstitutions < ActiveRecord::Migration
  def change
    create_table :institutions do |t|
      t.text :institution_name
      t.text :institution_status
      t.references :address, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
