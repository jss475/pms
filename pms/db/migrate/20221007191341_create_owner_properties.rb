class CreateOwnerProperties < ActiveRecord::Migration[7.0]
  def change
    create_table :owner_properties do |t|
      t.integer :owner_id
      t.integer :property_id
      t.timestamps
    end
  end
end
