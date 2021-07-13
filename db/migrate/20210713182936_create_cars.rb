class CreateCars < ActiveRecord::Migration[6.1]
  def change
    create_table :cars do |t|
      t.string :title, null:false
      t.string :kind, default: 'sport'
      t.string :color, default: 'blue'

      t.timestamps
    end
  end
end
