class CreateTenants < ActiveRecord::Migration[7.0]
  def change
    create_table :tenants do |t|
      t.integer :property_id
      t.integer :lease_id
      t.integer :apartment_id
      t.string :first_name
      t.string :last_name
      t.string :username
      t.string :email
      t.string :password_digest
      t.string :password_confirmation
      t.integer :tenant_age
      t.string :tenant_job_title
      t.float :tenant_job_salary
      t.date :lease_start_date
      t.date :lease_end_date
      
      t.timestamps
    end
  end
end
