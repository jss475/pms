class CreateProperties < ActiveRecord::Migration[7.0]
  def change
    create_table :properties do |t|
      t.string :propertyName
      t.string :address
      t.integer :bedroomCount
      t.float :bathroomCount
      t.float :totalRentalAmount
      t.float :totalBalance
      t.integer :propertySize
      t.date :leaseStartDate
      t.date :leaseEndDate
      t.timestamps
    end
  end
end
