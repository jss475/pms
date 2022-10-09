class AddEmergencyContactToTenants < ActiveRecord::Migration[7.0]
  def change
      add_column :tenants, :emergencyContact, :text, array: true
  end
end
