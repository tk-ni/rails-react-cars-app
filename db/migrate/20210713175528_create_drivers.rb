class CreateDrivers < ActiveRecord::Migration[6.1]
  def change
    create_table :drivers do |t|
      t.string :name, null:false
      t.string :email, null:false
      t.date :date_of_birth

      t.timestamps
    end
  end
end
