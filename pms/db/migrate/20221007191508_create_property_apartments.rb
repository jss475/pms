class CreatePropertyApartments < ActiveRecord::Migration[7.0]
  def change
    create_table :property_apartments do |t|
      t.integer :property_id
      t.integer :apartment_id

      t.timestamps
    end
  end
end
