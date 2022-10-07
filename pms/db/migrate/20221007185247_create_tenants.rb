class CreateTenants < ActiveRecord::Migration[7.0]
  def change
    create_table :tenants do |t|
      t.integer :property_id
      t.integer :lease_id
      t.integer :apartment_id
      
      t.timestamps
    end
  end
end
