class CreateApartments < ActiveRecord::Migration[7.0]
  def change
    create_table :apartments do |t|
      t.string :apartmentNumber
      t.string :address
      t.integer :bedroomCount
      t.float :bathroomCount
      t.float :rentalAmount
      t.integer :propertySize
      t.date :leaseStartDate
      t.date :leaseEndDate
      t.float :totalBalance

      t.timestamps
    end
  end
end
