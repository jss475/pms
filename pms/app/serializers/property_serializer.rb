class PropertySerializer < ActiveModel::Serializer
  has_many :apartments
  attributes :id, :address, :bedroomCount, :bathroomCount, :totalRentalAmount,
  :totalBalance, :propertySize, :leaseStartDate, :leaseEndDate
  
end
