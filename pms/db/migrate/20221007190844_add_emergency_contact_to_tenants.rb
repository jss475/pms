class AddEmergencyContactToTenants < ActiveRecord::Migration[7.0]
  def change
      add_column :tenants, :emergency_contact, :text, array: true
  end
end
