class CreateProperties < ActiveRecord::Migration[7.0]
  def change
    create_table :properties do |t|
      t.string "property_name"
      t.string "street_address"
      t.string "city"
      t.string "state"
      t.integer "zip_code"
      t.integer "bedroom_count"
      t.float "bathroom_count"
      t.float "total_rental_amount"
      t.float "total_balance", default: 0
      t.integer "property_size"
      t.date "lease_start_date"
      t.date "lease_end_date"
      t.timestamps
    end
  end
end
