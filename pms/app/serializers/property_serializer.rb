class PropertySerializer < ActiveModel::Serializer
  has_many :apartments
  attributes :id, :property_name, :street_address, :city, :state, :zip_code, :bedroom_count, :bathroom_count, :rental_amount, :total_rental_amount,
  :total_balance, :property_size, :lease_start_date, :lease_end_date
  
end
