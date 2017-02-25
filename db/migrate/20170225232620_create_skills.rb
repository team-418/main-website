class CreateSkills < ActiveRecord::Migration
  def change
    create_table :skills do |t|
      t.string :name
      t.string :sub_skill

      t.timestamps null: false
    end
  end
end
