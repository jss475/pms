class CreateTenants < ActiveRecord::Migration[7.0]
  def change
    create_table :tenants do |t|
      t.integer :property_id
      t.integer :lease_id
      t.integer :apartment_id
      t.string :firstName
      t.string :lastName
      t.string :username
      t.string :email
      t.string :password_digest
      t.string :password_confirmation
      t.integer :tenantAge
      t.string :tenantJobTitle
      t.float :tenantJobSalary
      t.date :leaseStartDate
      t.date :leaseEndDate
      
      t.timestamps
    end
  end
end
