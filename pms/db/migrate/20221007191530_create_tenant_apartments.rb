class CreateTenantApartments < ActiveRecord::Migration[7.0]
  def change
    create_table :tenant_apartments do |t|
      t.integer :tenant_id
      t.integer :apartment_id

      t.timestamps
    end
  end
end
