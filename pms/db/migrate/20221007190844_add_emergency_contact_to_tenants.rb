class AddEmergencyContactToTenants < ActiveRecord::Migration[7.0]
  def change
      add_column :tenants, :emergencyConact, :text, array: true
  end
end
